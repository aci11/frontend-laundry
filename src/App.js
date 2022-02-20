import React from "react";
import "./App.css";
import Member from "./pages/member";
import Paket from "./pages/paket";
import User from "./pages/user";
import Transaksi from "./pages/transaksi";
import FormTransaksi from "./pages/formtransaksi"
import Login from "./pages/login";
import Header from "./header";
import Footer from "./footer";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";

export default function App(){
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar><Dashboard /></Navbar>} />
            <Route path="/transaksi" element={<Navbar><Transaksi /></Navbar>} />
            <Route path="/login" element={<Login />} />
            <Route path="/member" element={<Navbar><Member /></Navbar>} />
            <Route path="/paket" element={<Navbar><Paket /></Navbar>} />
            <Route path="/user" element={<Navbar><User /></Navbar>} />
            <Route path="/form-transaksi" element={<Navbar><FormTransaksi /></Navbar>} />
        </Routes>
      
   </BrowserRouter>
  );
} 

function Home() {
  return <h2>Home</h2>;
}