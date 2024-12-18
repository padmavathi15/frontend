import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"; // Assuming your Navbar is in the components folder
import HeroSection from "./components/HeroSection";
import LoginPage from "./components/LoginPage";
import TeacherPortal from "./components/TeacherPortal"; // Teacher portal page
import "./css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HeroSection />} /> {/* Home page route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
        <Route path="/teacher-portal" element={<TeacherPortal />} /> {/* Teacher Portal page route */}
      </Routes>
    </Router>
  );
};

export default App;
