import React, { useContext } from "react";
import QuizContext from "../../store/QuizContext";
import "./Pocetna.css";

const Pocetna = () => {
  const { setIsStarted } = useContext(QuizContext);
  const zapocni = () => {
    setIsStarted(true);
  };
  return (
    <div className="main">
      <div className="pocetna">
        <h1>Dobrodosli u React quiz!</h1>
        <button onClick={zapocni}>Zapocni kviz</button>
      </div>
    </div>
  );
};

export default Pocetna;
