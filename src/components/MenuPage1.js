// App.js
import React, { useState, useEffect } from 'react';
import './MenuPage1.css';
import questions from './questions';  // Assuming you have a file named 'questions.js'

const MenuPage1 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    // Set the initial question when the component mounts
    if (currentQuestionIndex < Object.keys(questions).length) {
      const currentQuestionKey = Object.keys(questions)[currentQuestionIndex];
      setCurrentQuestion({ key: currentQuestionKey, data: questions[currentQuestionKey] });
    }
  }, [currentQuestionIndex]);

  const handleAnswerClick = (selectedAnswer) => {
    const [, , correctAnswer] = currentQuestion.data;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderChoices = () => {
    const [, choices] = currentQuestion.data;

    return choices.map((choice, index) => (
      <div key={index} className="choice" onClick={() => handleAnswerClick(choice)}>
        {choice}
      </div>
    ));
  };

  const renderGameContent = () => {
    if (currentQuestion) {
      return (
        <div>
          <h2>{currentQuestion.key}</h2>
          <div className="choices-container">{renderChoices()}</div>
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
      <h1>Trivia Game</h1>
      {renderGameContent()}
    </div>
  );
};

export default MenuPage1;
