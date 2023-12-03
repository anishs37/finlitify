//import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import './MenuPage2.css';
import './HomePage.css';
//import axios from 'axios';


const MenuPage2 = () => {

  return (
    <div className="container">
      <button className="back-button">
        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </button>
      <h1>Budgeting Tips Menu</h1>
      <div className="menu-options">
        <Link to="/menu/introduction" className="menu-item">
          Introduction to Budgeting
        </Link>
        <Link to="/menu/planning" className="menu-item">
          Budget Planning
        </Link>
        <Link to="/menu/expenses" className="menu-item">
          Managing Expenses
        </Link>
        <Link to="/menu/saving" className="menu-item">
          Saving Strategies
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default MenuPage2;
