import React, { useState, useEffect } from "react";
import "./Quiz.css";

function Quiz({ quizData, onQuizEnd }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestion]);

  const handleAnswer = (answerIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answerIndex;
    setAnswers(updatedAnswers);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
    } else {
      onQuizEnd(updatedAnswers);
    }
  };

  return (
    <div className="quiz-container">
      <div className="container">
        <h2>Quiz</h2>
        <div className="quiz-question">
          <p>{quizData[currentQuestion].question}</p>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>
                {option}
              </button>
            ))}
          </div>
        </div>
        <p className="timer">Time remaining: {timer} seconds</p>
      </div>
    </div>
  );
}

export default Quiz;
