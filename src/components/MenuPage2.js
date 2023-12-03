// MenuPage2.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import './MenuPage2.css';
import './HomePage.css';

const MenuPage2 = ({ wolframApiKey }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    try {
      const encodedQuery = encodeURIComponent(question);
      const apiKey = 'HHYEJK-4W4E445VVH'; // Replace with your actual Wolfram Alpha API key
      const apiUrl = `https://cors-anywhere.herokuapp.com/http://api.wolframalpha.com/v2/query?appid=${apiKey}&input=${encodedQuery}`;
  
      const response = await axios.get(apiUrl);
  
      const pods = response.data.queryresult.pods;
      const primaryPod = pods[1];
      const primaryAnswer = primaryPod && primaryPod.subpods[0].plaintext;
  
      setAnswer(primaryAnswer || 'No answer available');
    } catch (error) {
      console.error('Error fetching data from Wolfram Alpha:', error);
    }
  };
  

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
      <div className="wolfram-section">
        <input
          type="text"
          placeholder="Ask a question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleAskQuestion}>Ask</button>
        <div className="answer">{answer}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage2;
