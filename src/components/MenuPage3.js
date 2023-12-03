import React, { useState, useEffect } from 'react';
import './MenuPage3.css';
import saveQuestions from './saveQuestions';

const MenuPage3 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex < Object.keys(saveQuestions).length) {
      const currentQuestionKey = Object.keys(saveQuestions)[currentQuestionIndex];
      setCurrentQuestion({ key: currentQuestionKey, data: saveQuestions[currentQuestionKey] });
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    }
  }, [currentQuestionIndex]);

  const handleAnswerClick = (choice) => {
    setSelectedAnswer(choice);
  };

  const handleNextButtonClick = () => {
    const { choices, correctAnswer, level } = currentQuestion.data;
    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    // Check if there are more questions
    if (currentQuestionIndex + 1 < Object.keys(saveQuestions).length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  
      const { level } = currentQuestion.data;
      if (level) {
        const levelQuestions = Object.values(saveQuestions).filter(
          (q) => q.level === level && q.key !== currentQuestion.key
        );
        const randomQuestion = levelQuestions[Math.floor(Math.random() * levelQuestions.length)];
        setCurrentQuestion({ key: randomQuestion.key, data: randomQuestion });
      } else {
        setCurrentQuestion(null);
      }
  
      setIsAnswerSubmitted(false);
    } else {
      // If all questions are completed, reset to the first question
      setCurrentQuestionIndex(0);
      const randomQuestion = Object.values(saveQuestions)[Math.floor(Math.random() * Object.keys(saveQuestions).length)];
      setCurrentQuestion({ key: randomQuestion.key, data: randomQuestion });
      setIsAnswerSubmitted(false);
    }
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
      const { key, data } = currentQuestion;
      return (
        <div>
          <h3>{key} - Level {data.level}</h3>
          <div className="choices-container">{renderChoices()}</div>
          <button onClick={handleNextButtonClick}>Submit</button>
          {isAnswerSubmitted && (
            <div className="answer-feedback">
              {selectedAnswer === data.correctAnswer ? 'Right!' : 'Wrong!'}
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
      <div>
      <h2>Savings Tips for College Students</h2>
      <ul className='budget-info'>
        <li>Create a budget to track income and expenses. Allocate funds for savings.</li>
        <li>Build a three to six months' emergency fund.</li>
        <li>Take advantage of discounts on various services with student discounts.</li>
        <li>Find part-time work, balancing with academics.</li>
        <li>Explore cost-saving options for textbooks (renting, buying used).</li>
        <li>Cut unnecessary costs, cook at home, and use public transport to limit expenses.</li>
        <li>Automate savings by setting up automatic transfers.</li>
        <li>Look for savings accounts with competitive interest rates.</li>
        <li>Use financial aid wisely for essential expenses and avoid unnecessary debt.</li>
        <li>Consider long-term goals, learn about investments, and plan for the future.</li>
      </ul>
    </div>
      <h2>Do you want to test our FinQuiz? </h2>
      {renderGameContent()}
    </div>
  );
};

export default MenuPage3;
