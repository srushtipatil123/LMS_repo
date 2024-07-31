import Header from './component/indexHeader'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import All_courses from './pages/All_courses';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All_courses" element={<All_courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}


export default App;
