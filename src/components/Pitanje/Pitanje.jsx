import React, { useContext, useState } from "react";
import QuizContext from "../../store/QuizContext";
import "./Pitanje.css";

const Pitanje = ({ pitanjaIodgovori }) => {
  const [pitanjeIndex, setPitanjeIndex] = useState(0);
  const { pitanje, odgovori, tacanOdgovor } = pitanjaIodgovori[pitanjeIndex];
  const {
    minutes,
    seconds,
    setFinished,
    tacniOdg,
    setTacniOdg,
    neTacniOdg,
    setNeTacniOdg,
    setIsStarted,
    reset,
  } = useContext(QuizContext);
  // let tacniOdg = 0; ne moze u varijablu jer ne izvrsava re-render a mora re-render kako bi se live
  // update podaci on ga povecava ali ne re-redneruje jsx i ne vidi se
  // let neTacniOdg = 0;
  let odg = [];

  const [clickedInput, setClickedInput] = useState();

  // let clickedInput;

  // const inp = useRef();
  for (let prop in odgovori) {
    odg.push(odgovori[prop]);
  }

  // console.log(Object.keys(odgovori));

  const checkS = (e) => {
    setClickedInput(e.target);
    // clickedInput = e.target;
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    setPitanjeIndex((prev) => prev + 1);
    // clickedInput.checked = false;
    setClickedInput();
    clickedInput.checked = false;
    if (clickedInput.id === tacanOdgovor) {
      setTacniOdg((prev) => prev + 1);
    } else {
      setNeTacniOdg((prev) => prev + 1);
    }
    if (pitanjeIndex === pitanjaIodgovori.length - 1) {
      // setIsStarted(false);
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setIsStarted(false);
    reset();
  };

  return (
    <div className="main">
      <div className="sve">
        <p className="pitanje">{pitanje}</p>
        <form className="odgForm" onSubmit={(e) => checkAnswer(e)}>
          {Object.keys(odgovori).map((objKey, index) => {
            return (
              <div className="odg" key={index}>
                <input
                  onClick={(e) => checkS(e)}
                  name="istoIme"
                  type="radio"
                  id={objKey}
                />
                <label htmlFor={objKey}>{odgovori[objKey]}</label>
              </div>
            );
          })}

          <button
            className="submitBtn"
            disabled={!clickedInput && true}
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="posleForm">
          <p>
            Timer: {minutes}:{seconds < 10 && "0"}
            {seconds}
          </p>
          <button className="odustaniBtn" onClick={() => resetQuiz()}>
            Odustani
          </button>
          <p>Tacni odgovori: {tacniOdg}</p>
          <p>Netacni odgovori: {neTacniOdg}</p>
        </div>
      </div>
    </div>
  );
};

export default Pitanje;
