import React, { useContext, useEffect } from "react";
import QuizContext from "../../store/QuizContext";
import "./ZavrsenKviz.css";

const ZavrsenKviz = ({ ukupanBroj }) => {
  const { seconds, minutes, tacniOdg, setFinished, reset } =
    useContext(QuizContext);
  let res = tacniOdg / parseFloat(ukupanBroj);
  const goToStart = () => {
    setFinished(false);
    reset();
  };

  return (
    <div className="main">
      <div className="kraj">
        <p>
          Vrijeme zavrsetka kviza: {minutes}:{seconds < 10 && "0"}
          {seconds}s
        </p>
        <p>
          Rezultat:{tacniOdg}/{ukupanBroj}, {res * 100}%
        </p>
        <button onClick={goToStart}>idite na pocetni ekran</button>
      </div>
    </div>
  );
};

export default ZavrsenKviz;
