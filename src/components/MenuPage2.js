import React, { useState, useEffect } from 'react';
import './MenuPage2.css'; // Assuming you have a file named 'MenuPage1.css'
import taxesQuestions from './taxesQuestions'; // Assuming you have a file named 'taxesQuestions.js'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import './MenuPage2.css';
import './HomePage.css';
import '../setupProxy.js';

  useEffect(() => {
    // Set the initial question when the component mounts
    if (currentQuestionIndex < Object.keys(taxesQuestions).length) {
      const currentQuestionKey = Object.keys(taxesQuestions)[currentQuestionIndex];
      setCurrentQuestion({ key: currentQuestionKey, data: taxesQuestions[currentQuestionKey] });
      setSelectedAnswer(null); // Reset selected answer when the question changes
      setIsAnswerSubmitted(false); // Reset answer submission status
    }
  }, [currentQuestionIndex]);

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
    <div className="app">
      <div className="tax-info">
      <h2>Understanding Taxes for College Students</h2>

      <h3>Why Do College Students Need to Know About Taxes?</h3>
      <p>
        Taxes are a part of adulting, and even as a college student, you may have responsibilities that involve taxation. Understanding taxes is crucial because it helps you comply with legal requirements and manage your finances effectively.
      </p>

      <h3>Common Tax Concepts for College Students:</h3>

      <h4>1. Filing Status:</h4>
      <p>
        Your filing status (single, married, etc.) determines how you'll file your tax return. As a college student, you're likely to be considered a single filer.
      </p>

      <h4>2. Income Types:</h4>
      <p>
        College students may have various income sources, such as wages from a part-time job, scholarships, grants, or income from internships. All sources of income need to be reported on your tax return.
      </p>

      <h4>3. Form W-4:</h4>
      <p>
        When you start a job, you'll fill out a Form W-4, which helps your employer determine the amount of federal income tax to withhold from your paycheck. It's essential to fill it out accurately to avoid surprises during tax season.
      </p>

      <h4>4. Tax Deductions and Credits:</h4>
      <p>
        Explore potential tax deductions and credits available to students. This could include education-related expenses, student loan interest, and educational credits like the American Opportunity Credit.
      </p>

      <h3>Tips for College Students:</h3>

      <ul>
        <li>
          <strong>Keep Records:</strong> Maintain records of your income, expenses, and any relevant tax documents.
        </li>
        <li>
          <strong>Educate Yourself:</strong> Familiarize yourself with tax laws, especially those that apply to students.
        </li>
        <li>
          <strong>Consider Professional Help:</strong> If your tax situation is complex, consider seeking help from a tax professional or using tax software.
        </li>
        <li>
          <strong>File on Time:</strong> Don't forget to file your tax return by the deadline, typically April 15th.
        </li>
      </ul>

      <p>
        Understanding taxes as a college student is an important step towards financial literacy. It ensures you meet your legal obligations and can make informed decisions about your finances.
      </p>
    </div>
      <h2>Do you want to test our FinQuiz? </h2>
      {renderGameContent()}
    </div>
  );
};

export default MenuPage2;
