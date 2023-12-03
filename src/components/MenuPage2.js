// MenuPage2.js

import React, { useState, useEffect } from 'react';
import './MenuPage1.css'; // Assuming you have a file named 'MenuPage1.css'
import taxQuestions from './taxQuestions'; // Assuming you have a file named 'taxQuestions.js'

const MenuPage1 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  useEffect(() => {
    // Set the initial question when the component mounts
    if (currentQuestionIndex < Object.keys(taxQuestions).length) {
      const currentQuestionKey = Object.keys(taxQuestions)[currentQuestionIndex];
      setCurrentQuestion({ key: currentQuestionKey, data: taxQuestions[currentQuestionKey] });
      setSelectedAnswer(null); // Reset selected answer when the question changes
      setIsAnswerSubmitted(false); // Reset answer submission status
    }
  }, [currentQuestionIndex]);

  const handleAnswerClick = (choice) => {
    setSelectedAnswer(choice);
  };

  const handleNextButtonClick = () => {
    const { choices, correctAnswer, level } = currentQuestion.data;

    // Check if the selected answer is correct
    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    // Show answer submission status
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    // If there is a next question at the same level, show it
    const { level } = currentQuestion.data;
    if (level) {
      const levelQuestions = Object.values(taxQuestions).filter((q) => q.level === level && q.key !== currentQuestion.key);
      const randomQuestion = levelQuestions[Math.floor(Math.random() * levelQuestions.length)];
      setCurrentQuestion({ key: randomQuestion.key, data: randomQuestion });
    } else {
      setCurrentQuestion(null);
    }

    // Reset answer submission status
    setIsAnswerSubmitted(false);
  };

  const renderChoices = () => {
    const { choices } = currentQuestion.data;

    return choices.map((choice, index) => (
      <div
        key={index}
        className={`choice ${selectedAnswer === choice ? 'selected' : ''}`}
        onClick={() => handleAnswerClick(choice)}
      >
        {choice}
      </div>
    ));
  };

  const renderGameContent = () => {
    if (currentQuestion) {
      const { key } = currentQuestion;
      return (
        <div>
          <h3>{key}</h3>
          <div className="choices-container">{renderChoices()}</div>
          <button onClick={handleNextButtonClick}>Submit</button>
          {isAnswerSubmitted && (
            <div className="answer-feedback">
              {selectedAnswer === currentQuestion.data.correctAnswer ? 'Right!' : 'Wrong!'}
            </div>
          )}
          {isAnswerSubmitted && <button onClick={handleNextQuestion}>Next</button>}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Game Over</h2>
          <p>Your final score is: {score}</p>
        </div>
      );
    }
  };

  return (
    <div className="app">
      <div className='budget-info'>
      <h2>Tax Tips for College Students</h2>
      <ul>
        <li>Choose filing status based on finances.</li>
        <li>Report job, scholarship, and grant earnings.</li>
        <li>Utilize tax credits like American Opportunity and Lifetime Learning.</li>
        <li>Deduct up to $2,500 of student loan interest annually.</li>
        <li>Explore tax-free growth with Coverdell ESAs and 529 plans.</li>
        <li>Report Federal Work-Study earnings as taxable income.</li>
        <li>Check for state-specific education-related credits.</li>
        <li>Choose the right tax form (1040, 1040A, or 1040EZ).</li>
        <li>Qualify for free tax preparation services through programs like VITA.</li>
        <li>Keep accurate records of tuition, scholarships, and expenses.</li>
        <li>Consult a tax professional for complex situations or eligibility queries.</li>
      </ul>
    </div>
      <h2>Do you want to test our FinQuiz? </h2>
      {renderGameContent()}
    </div>
  );
};
export default MenuPage2;

