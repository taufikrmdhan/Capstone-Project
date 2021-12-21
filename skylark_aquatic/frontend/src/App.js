/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from './components/EditProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import LihatProduct from './components/LihatProduct';
import Sistem from './components/Sistem';
import React, { useState } from "react";
import { Navbar } from 'react-bootstrap'


function App() {
  return (

    

<div>
  <div>
  <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src="https://i.ibb.co/RgXmqMg/logo.png" width="60px" height="60px" />{' '}
          <a className="navbar-brand" href="/">Skylark Aquatic</a>
        </Navbar.Brand>

        <Navbar.Toggle  className="coloring"/>
        <Navbar.Collapse>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item nav_posisi">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item nav_posisi">
                  <a className="nav-link active" href="sistem.html" href="/sistem">Sistem</a>
                </li>
                <li className="nav-item nav_posisi">
                  <a className="nav-link active" aria-current="page" href="/admin">Admin</a>
                </li>
              </ul>
        </Navbar.Collapse>

      </Navbar>
  </div>
    <div>
  <div className="jumbotron">
           <img src="https://i.ibb.co/RgXmqMg/logo.png"className="image"/> <h1 className="h1-header">Skylark Aquatic </h1>
           <p className="p-header">"Suatu Komunitas Penggemar Ikan Channa, Dengan Menjaga Habitat Aslinya"</p>
       </div>
       </div>
    
  
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin" element={<ProductList />} />
            <Route exact path="/add" element={<AddProduct />} />
            <Route exact path="/edit/:id" element={<EditProduct />} />
            <Route exact path="/lihat/:id" element={<LihatProduct />} />
            <Route exact path="/sistem" element={<Sistem />} />
          </Routes>
        </Router>
      </div>

      <footer>
        <div class="footer-content">
            <h3>Skylark Aquatic</h3>
            <p>Skylark Aquatic adalah sebuah website yang dibangun oleh Karel Dan Taufik untuk memenuhi tugas capstone project atau project akhir dalam program Studi Independent Bersertifikat Dicoding yang diselenggarakan pemerintah.</p>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; Capstone Project Dicoding  </p>
        </div>
      </footer>
  </div>
  );
}

export default App;
