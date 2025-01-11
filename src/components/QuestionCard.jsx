import React from "react";
import "../styles/QuestionCard.css";

const QuestionCard = ({ question, index }) => {
  return (
    <div className="card">
      <h2>Вопрос {index + 1}:</h2>
      <p>{question}</p>
    </div>
  );
};

export default QuestionCard;
