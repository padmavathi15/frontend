import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBell } from 'react-icons/fa';  // Importing the notification icon from react-icons
import '../css/Navbar.css';  // Import custom CSS file for the navbar


const TeacherNavbar = () => {
    const [showInfo, setShowInfo] = useState(false);

const handleMouseEnter = () => {
    setShowInfo(true);
  };

  // Function to hide the info
  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container-fluid">
        {/* Left side: Logo and School Name */}
        <a className="navbar-brand" href="#">
          <img src="/images/school_logo1.jpg" alt="Logo" width="50" height="50" /> {/* Adjust logo size */}
          <span className="text-primary">ABC International Public School</span>        </a>

        {/* Right side: Search Bar, Notification, Teacher Info, Logout */}
        <div className="d-flex ms-auto">
          <input
            className="form-control me-2 w-50 custom-search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value="search"
          />
          <button className="btn btn-outline-primary">Search</button>

          <a className="nav-link ml-10 me-3" href="#" role="button">
            <FaBell style={{ color: 'red', width: '40px', height: '40px' }} className="text-danger" />{/* Notification icon */}
          </a>

         
      {/* Teacher image */}
      <img
        src="/images/Pp.jpg"  // Replace with actual teacher image path
        alt="Teacher"
        width="50" 
        height="50"
        className="rounded-circle"
        onMouseEnter={handleMouseEnter}  // Show info when mouse enters
        onMouseLeave={handleMouseLeave}  // Hide info when mouse leaves
      />
      
      {/* Teacher info */}
      {showInfo && (
        <div className="ms-3">
          <span className="navbar-text me-3 custom-text">
            Teacher ID: 12345
          </span>
          <span className="navbar-text me-3 custom-text">
            Teacher Name
          </span>
        </div>
      )}
    
          <button className="btn btn-outline-danger custom-btn" type="button">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TeacherNavbar;
