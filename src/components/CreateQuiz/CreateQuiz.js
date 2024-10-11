import React, { useState } from "react";
import "./CreateQuiz.css";

function CreateQuiz({ onQuizCreate }) {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: null },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: null },
    ]);
  };

  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[optIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctAnswer = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    onQuizCreate(questions);
  };

  return (
    <div className="create-quiz-container">
      <div className="create-quiz">
        <h2>Create a Quiz</h2>
        {questions.map((question, qIndex) => (
          <div className="question-block" key={qIndex}>
            <input
              type="text"
              placeholder="Enter question"
              value={question.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
            />
            {question.options.map((option, optIndex) => (
              <input
                key={optIndex}
                type="text"
                placeholder={`Option ${optIndex + 1}`}
                value={option}
                onChange={(e) =>
                  handleOptionChange(qIndex, optIndex, e.target.value)
                }
              />
            ))}
            <select
              onChange={(e) =>
                handleCorrectAnswerChange(qIndex, parseInt(e.target.value, 10))
              }
            >
              <option value={-1}>Select Correct Answer</option>
              {question.options.map((_, optIndex) => (
                <option key={optIndex} value={optIndex}>{`Option ${
                  optIndex + 1
                }`}</option>
              ))}
            </select>
            <button
              className="delete-button"
              onClick={() => deleteQuestion(qIndex)}
            >
              <h6>Delete</h6>
            </button>
          </div>
        ))}
        <div className="buttons">
          <button onClick={addQuestion}>Add Another Question</button>
          <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
