import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import './HomePage.css'; // Import the separate CSS file


const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to FinLitify!</h1>
      <p>
        This is the home page. Click on the links below to navigate to the other pages.
      </p>
      <div className="about">
        <Link to="/about" className="about-link">
          About
        </Link>
      </div>
        <div className="menu">
          <Link to="/menu1" className="menu-item menu1 center-text">
            Budgeting Tips
          </Link>
          <Link to="/menu2" className="menu-item menu2 center-text">
            Taxes Tips
          </Link>
          <Link to="/menu3" className="menu-item menu3 center-text">
            Savings Tips
          </Link>
        </div>
      <Footer />
    </div>
  );
};

export default HomePage;