import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Transaksi from "./pages/transaksi" 
import FormTransaksi from './pages/formtransaksi';
import Login from './pages/login.js';

import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";


ReactDOM.render(
  <React.StrictMode>
    {/* <Login /> */}
    <App />
    {/* <Transaksi />
    <br />
    <FormTransaksi /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();