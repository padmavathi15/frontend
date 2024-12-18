import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./NavBar";
const LoginPage = () => {
  return (
    <div>
      <Navbar/>
   
    <div className="container-fluid login-page">
      <div className="left-half">
        {["Admin", "Teacher", "Student", "Parent"].map((portal, index) => (
          <div className="container portal-container" key={index}>
            <h3>{portal} Portal</h3>
            <button className="btn btn-primary">
              {portal === "Teacher" ? (
                <a href="/teacher-portal" className="text-light text-decoration-none">Teacher</a>
              ) : (
                "Login"
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="right-half">
        <div className="background-overlay">
          <h2>Welcome to the Portals</h2>
          <p>Each portal offers specific functionality for administrators, teachers, students, and parents. Choose your portal and login to access the respective features.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
