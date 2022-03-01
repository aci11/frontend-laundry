import React from "react";
import axios from "axios";
import { baseUrl , formatNumber, authorization } from "../config";

export default class Dashboard extends React.Component{
    constructor(){
        super()

        this.state = {
            jmlMember: 0,
            jmlPaket: 0,
            JmlTransaksi: 0,
            income: 0
        }

        if (!localStorage.getItem("token")){
            window.location.href = "/login"
        }
    }

    getSummary(){

        //get jumlah member
        let endpoint = `${baseUrl}/member`
        axios.get(endpoint, authorization)
        .then(response => {
            this.setState({jmlMember: response.data.length})
        })
        .catch(error => console.log(error))

        //get jumlah paket
        endpoint = `${baseUrl}/paket`
        axios.get(endpoint, authorization)
        .then(response => {
            this.setState({jmlPaket: response.data.length})
        })
        .catch(error => console.log(error))

        //get jumlah transaksi
        endpoint = `${baseUrl}/transaksi`
        axios.get(endpoint, authorization)
        .then(response => {
            let dataTransaksi = response.data
            let income = 0
            for (let i = 0; i < dataTransaksi.length; i++){
                let total = 0;
                for (let j = 0; j < dataTransaksi[i].detail_transaksi.length; j++) {
                    let harga = dataTransaksi[i].detail_transaksi[j].paket.harga
                    let qty = dataTransaksi[i].detail_transaksi[j].qty

                    total += (harga * qty)
                }

                // tambahkan key "total"
                income += total

            }
            this.setState({
                JmlTransaksi: response.data.length,
                income: income
        })    
        })
        .catch(error => console.log(error))
    }

    componentDidMount(){
        this.getSummary()
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card text-center bg-danger m-1 text-white">
                            <div className="card-body">
                                <h4 className="card-tittle">Data Member</h4>
                                <h2>{this.state.jmlMember}</h2>
                                <h6>Member yang telah bergabung di Cleans Londre</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card text-center bg-warning m-1 text-white">
                            <div className="card-body">
                                <h4 className="card-tittle">Data Paket</h4>
                                <h2>{this.state.jmlPaket}</h2>
                                <h6>Paket yang tersedia di Cleans Londre</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card text-center bg-dark m-1 text-white">
                            <div className="card-body">
                                <h4 className="card-tittle">Data Transaksi</h4>
                                <h2>{this.state.JmlTransaksi}</h2>
                                <h6>Transaksi yang telah kami layani</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card bg-dark m-1 text-white">
                            <div className="card-body">
                                <h4 className="card-title">Income</h4>
                                <h2>Rp {formatNumber(this.state.income)}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}