import React, { useState, useEffect } from 'react';
import './MenuPage1.css'; // Assuming you have a file named 'MenuPage1.css'
import budgetQuestions from './budgetQuestions'; // Assuming you have a file named 'budgetQuestions.js'

const MenuPage1 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  useEffect(() => {
    // Set the initial question when the component mounts
    if (currentQuestionIndex < Object.keys(budgetQuestions).length) {
      const currentQuestionKey = Object.keys(budgetQuestions)[currentQuestionIndex];
      setCurrentQuestion({ key: currentQuestionKey, data: budgetQuestions[currentQuestionKey] });
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
      const levelQuestions = Object.values(budgetQuestions).filter((q) => q.level === level && q.key !== currentQuestion.key);
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
      <div className="budget-info">
      <h2>Financial Basics for All Ages</h2>
      <h2>Budgeting for Teens: The Basics</h2>

      <h3>What is a Budget?</h3>
      <p>
        A budget is like a roadmap for your money. It helps you plan how to spend
        and save your money wisely. Just like you plan your day or week, a budget
        helps you plan where your money will go.
      </p>

      <h3>Why Budget?</h3>
    
        <li>
          <strong>Understand Your Money:</strong> A budget helps you see how
          much money you have and where it goes.
        </li>
        <li>
          <strong>Reach Goals:</strong> Want a new gadget or save for a trip? A
          budget helps you save for things you want.
        </li>
        <li>
          <strong>Avoid Money Stress:</strong> Knowing where your money goes
          reduces stress about spending.
        </li>
     

      <h2>How to Create a Teen Budget</h2>

      
        <li>
          <strong>Know Your Income:</strong> Allowance, part-time job, gifts –
          whatever money you get.
        </li>
        <li>
          <strong>List Your Expenses:</strong> What do you spend money on? School
          lunch, snacks, games, etc.
        </li>
        <li>
          <strong>Set Spending Categories:</strong> Split your expenses into
          categories like entertainment, food, savings.
        </li>
        <li>
          <strong>Plan and Prioritize:</strong> Allocate money to each category.
          Plan for your needs first, then wants.
        </li>
        <li>
          <strong>Save Some, Spend Some:</strong> Decide how much you want to
          save from each income.
        </li>
        <li>
          <strong>Track Your Spending:</strong> Keep track of what you spend.
          Apps or a simple notebook work.
        </li>
        <li>
          <strong>Adjust as Needed:</strong> If you overspend in one category,
          adjust the others next time.
        </li>
    

      <h2>Tips for Teen Budgeting</h2>
      
        <ul>
          <strong>Emergency Fund:</strong> Save a little for unexpected
          expenses. It's your safety net.
        </ul>
        <li>
          <strong>Think Before You Spend:</strong> Do you really need it? Can
          it wait? Ask yourself before buying.
        </li>
        <li>
          <strong>Save for Goals:</strong> Want a new phone or a trip with
          friends? Budget for it.
        </li>
        <li>
          <strong>Involve Your Parents:</strong> They can help you set up and
          understand your budget.
        </li>
    

      <p>
        Remember, budgeting is a skill, and the more you practice, the better
        you'll become at managing your money. It's your tool for financial
        freedom and making smart money choices.
      </p>
    </div>
      <h2>Do you want to test our FinQuiz? </h2>
      {renderGameContent()}
    </div>
  );
};

export default MenuPage1;
