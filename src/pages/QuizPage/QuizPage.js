import React, { useState } from "react";
import Quiz from "../../components/Quiz/Quiz.js";
import CreateQuiz from "../../components/CreateQuiz/CreateQuiz.js";
import { useNavigate } from "react-router-dom";

function QuizPage() {
  const [quizData, setQuizData] = useState(null);
  const navigate = useNavigate();

  const handleQuizCreate = (quiz) => {
    setQuizData(quiz);
  };

  const handleQuizEnd = (answers) => {
    navigate("/result", { state: { quizData, answers } });
  };

  return (
    <div>
      {!quizData ? (
        <CreateQuiz onQuizCreate={handleQuizCreate} />
      ) : (
        <Quiz quizData={quizData} onQuizEnd={handleQuizEnd} />
      )}
    </div>
  );
}

export default QuizPage;
