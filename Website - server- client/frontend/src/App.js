import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from './components/EditProduct';
import LihatProduct from './components/LihatProduct';
import Sistem from './components/Sistem';
import React, { useState } from "react";


function App() {
  return (
  
<div>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="https://i.ibb.co/RgXmqMg/logo.png" alt="" width="85" height="60"/>
      <a className="navbar-brand" href="#">Skylark Aquatic</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="sistem.html" href="/sistem">Sistem</a>
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
      <img src="https://i.ibb.co/cN48bJn/carousel-2.jpg" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/cN48bJn/carousel-2.jpg" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/cN48bJn/carousel-2.jpg" className="d-block w-100"/>
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
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/admin" element={<ProductList/>}/>
          <Route exact path="/add" element={<AddProduct/>}/>
          <Route exact path="/edit/:id" element={<EditProduct/>}/>
          <Route exact path="/lihat/:id" element={<LihatProduct/>}/>
          <Route exact path="/sistem" element={<Sistem/>}/>
        </Routes>
    </Router>
    </div>
    
    <footer className="footer-wrapper">
      <p>
        Copyright &copy; Karel Leo rivaldo <em class="pull-right">3 desember 2021</em>
      </p>
    </footer>
</div>  
  );
}

export default App;
