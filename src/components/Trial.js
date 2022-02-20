import React from "react"

class Trial extends React.Component{
    render(){
        // render adalah fungsi utk tampilan elemen ini
        return(
            <div className={`alert alert-${this.props.bgColor}`}>
                <h3>{this.props.title}</h3>
                <small>{this.props.subtitle}</small>
            </div>
        )
    }
}
export default Trial
