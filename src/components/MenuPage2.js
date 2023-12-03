// MenuPage2.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import './MenuPage2.css';
import './HomePage.css';
import '../setupProxy.js';

const MenuPage2 = ({ wolframApiKey }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    try {
      const encodedQuery = encodeURIComponent(question);
      const apiKeyV2 = 'HHYEJK-4W4E445VVH'; // Replace with your actual Wolfram Alpha API key
      const apiKeyV1 = 'HHYEJK-52WQW2A46Q';
      // const apiUrl = `http://api.wolframalpha.com/v2/query?appid=${apiKey}&input=${encodedQuery}`;

      const baseUrl = 'https://cors-anywhere.herokuapp.com/http://api.wolframalpha.com';

      console.log('encodedQuery', encodedQuery);
      // const apiUrl = `${baseUrl}/v1/result?appid=${apiKeyV1}&i=${encodedQuery}`
      const apiUrl = `${baseUrl}/v2/query?input=${encodedQuery}&appid=${apiKeyV2}&output=json`
      
      console.log('apiUrl', apiUrl);
  
      const response = await axios.get(apiUrl);
  
      console.log('response', response);
      console.log('response.data', response.data);

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
