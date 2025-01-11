import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RandomButton from "./components/RandomButton";
import CardsContainer from "./components/CardsContainer";
import questions from "./data/questions";
import "./styles/App.css";

const App = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);

  const generateRandomQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setRandomQuestions(shuffled.slice(0, 6));
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflowY: 'scroll',
      }}
    >
      <Header />
      <main>
        <RandomButton onClick={generateRandomQuestions} />
        <CardsContainer questions={randomQuestions} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
