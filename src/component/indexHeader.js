import React from "react";
import "./Header.css";
import mainlogo from "../assate/main-logo.jpeg";

function indexHeader() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img className="logo" src={mainlogo} alt="log_image" />
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">All Courses</a>
            </li>
            <li className="nav-item">
              <a href="#services">Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Groups</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Login</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Register</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default indexHeader;
