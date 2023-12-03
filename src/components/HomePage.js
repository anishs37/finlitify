import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import './HomePage.css'; // Import the separate CSS file


const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome !!</h1>
      <p>
        This is an app
      </p>
      <div className="about">
        <Link to="/about" className="about-link">
          About
        </Link>
      </div>
        <div className="menu">
          <Link to="/menu1" className="menu-item menu1 center-text">
            Budgeting tips
          </Link>
          <Link to="/menu2" className="menu-item menu2 center-text">
            Taxes tips
          </Link>
          <Link to="/menu3" className="menu-item menu3 center-text">
            Savings tips
          </Link>
        </div>
      <Footer />
    </div>
  );
};

export default HomePage;