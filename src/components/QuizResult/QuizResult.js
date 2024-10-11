import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuizResult.css";

function QuizResult({ quizData, userAnswers }) {
  const navigate = useNavigate();
  const score = userAnswers.reduce((acc, answer, index) => {
    return answer === quizData[index].correctAnswer ? acc + 1 : acc;
  }, 0);

  const handleStartNewQuiz = () => {
    navigate("/");
  };

  return (
    <div className="result-container">
      <div className="container">
        <h2>Quiz Results</h2>
        <p className="score">
          Your score: {score}/{quizData.length}
        </p>
        {quizData.map((question, index) => (
          <div className="result-block" key={index}>
            <p>
              <strong>Question:</strong> {question.question}
            </p>
            <p>
              <strong>Your answer:</strong>{" "}
              {question.options[userAnswers[index]] || "No answer"}
            </p>
            <p>
              <strong>Correct answer:</strong>{" "}
              {question.options[question.correctAnswer]}
            </p>
          </div>
        ))}
        <button onClick={handleStartNewQuiz}>Start New Quiz</button>{" "}
      </div>
    </div>
  );
}

export default QuizResult;
