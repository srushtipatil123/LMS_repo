import React from "react";
import "./Header.css";
import mainlogo from "../assate/main-logo.jpeg";
import { Link } from 'react-router-dom';

function indexHeader() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img className="logo" src={mainlogo} alt="log_image" />
          <ul className="nav-links">
            <li className="nav-item"> <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/All_courses">All_courses</Link>
            </li>
            <li className="nav-item">
            <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
            <Link to="/Contact">Contact us</Link>
            </li>
            <li className="nav-item">
            <Link to="/Login">Login</Link>
            </li>
            <li className="nav-item">
            <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default indexHeader;
