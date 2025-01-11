import React from "react";
import "../styles/RandomButton.css";

const RandomButton = ({ onClick }) => {
  return (
    <button className="random-button" onClick={onClick}>
      Random
    </button>
  );
};

export default RandomButton;
