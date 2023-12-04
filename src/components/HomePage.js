import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import './HomePage.css'; // Import the separate CSS file
import axios from 'axios';
import Card from './Card.js';


const HomePage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    const apiKey = 'HHYEJK-4W4E445VVH'; // Replace with your actual Wolfram Alpha API key
    try {
      const encodedQuery = encodeURIComponent(question);
      const apiUrl = `https://cors-anywhere.herokuapp.com/http://api.wolframalpha.com/v2/query?appid=${apiKey}&input=${encodedQuery}&output=json`;
  
      const response = await axios.get(apiUrl);
  
      const pods = response.data.queryresult.pods;
      const primaryPod = pods[1];
      const primaryAnswer = primaryPod && primaryPod.subpods[0].plaintext;
  
      setAnswer(primaryAnswer || 'No answer available');
    } catch (error) {
      console.error('Error fetching data from Wolfram Alpha:', error);
      console.error('Question:', `http://api.wolframalpha.com/v2/query?appid=${apiKey}&input=${encodeURIComponent(question)}&output=json`);
      setAnswer('No answer available');
    }
  };
  
  return (
    <div className="container">
      <h1>Welcome to FinLitify!</h1>
      <p>
        This is the home page. Click on the links below to navigate to the other pages.
      </p>
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
        <div className="wolfram-section">
        <input
          type="text"
          placeholder="Ask a question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleAskQuestion}>Ask</button>
        <Card title={question} content={answer} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;