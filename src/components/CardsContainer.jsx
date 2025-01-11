import React from "react";
import QuestionCard from "./QuestionCard";
import "../styles/CardsContainer.css";

const CardsContainer = ({ questions }) => {
  return (
    <div className="cards-container">
      {questions.map((q, index) => (
        <QuestionCard key={index} question={q} index={index} />
      ))}
    </div>
  );
};

export default CardsContainer;
