import React from "react";
import { useLocation } from "react-router-dom";
import QuizResult from "../../components/QuizResult/QuizResult";

function ResultPage() {
  const { state } = useLocation();
  const { quizData, answers } = state || {};

  return (
    <div>
      <QuizResult quizData={quizData} userAnswers={answers} />
    </div>
  );
}

export default ResultPage;
