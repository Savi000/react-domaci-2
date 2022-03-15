import { createContext, useEffect } from "react";
import { useState } from "react";
import App from "../../App";

const QuizContext = createContext();


export const QuizContextProvider = (props) => {
    const [isStarted, setIsStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [timeout, setTimeout] = useState();
    const [finished, setFinished] = useState(false);
    const [tacniOdg, setTacniOdg] = useState(0);
    const [neTacniOdg, setNeTacniOdg] = useState(0);

    const updateTimer = () => {
        setTimer(prev => prev + 1);
    };
    useEffect(() => {
        if (finished) {
            setIsStarted(false);
        }

        if (isStarted) {
            setTimeout(setInterval(updateTimer, 1000))
        }
        if (finished) {
            clearInterval(timeout);
        }
        else {
            console.log('clear');
            setTimer(0);
            clearInterval(timeout);
        }

    }, [isStarted, finished])

    const reset = () => {
        setNeTacniOdg(0);
        setTacniOdg(0);
    };
    return (
        <QuizContext.Provider value={{ isStarted, setIsStarted, timer, finished, setFinished, tacniOdg, setTacniOdg, neTacniOdg, setNeTacniOdg, reset }}><App /></QuizContext.Provider>
    )
};

export default QuizContext;