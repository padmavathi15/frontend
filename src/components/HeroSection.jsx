import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./NavBar";

const HeroSection = () => {
  return (
    <div>
      <Navbar/>
  
    <header className="hero-section d-flex align-items-center">
      <div className="container text-center">
        <h1 className="display-4">
          Welcome to <span className="highlight">Our School Management System</span>
        </h1>
        <p className="lead">Streamlining administrative and educational processes with ease.</p>
        <a href="/about" className="btn btn-success mt-3">Learn More</a>
      </div>
    </header>
    </div>
  );
};

export default HeroSection;
