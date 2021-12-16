/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from './components/EditProduct';
import LihatProduct from './components/LihatProduct';
import Sistem from './components/Sistem';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function App() {
  return (

    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <img src="https://i.ibb.co/RgXmqMg/logo.png" alt="" width="85" height="60" />
            <a className="navbar-brand" href="#">Skylark Aquatic</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item nav_posisi">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item nav_posisi">
                  <a className="nav-link active" href="sistem.html" href="/sistem">Sistem</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* carousel */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/cN48bJn/carousel-2.jpg" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/cN48bJn/carousel-2.jpg" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/cN48bJn/carousel-2.jpg" className="d-block w-100" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* isi konten */}

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
            <h3>Skylark Agmatic</h3>
            <p>Skylark Agmatic adalah sebuah website yang dibangun oleh Karel dan Taufik untuk memenuhi tugas capstone project atau project akhir dalam program Studi Independent Bersertifikat Dicoding yang diselenggarakan pemerintah.</p>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; Capstone Project Dicoding  </p>
            {/* <Link to="/admin" className="btn btn-info mt-2"> Admin </Link> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
