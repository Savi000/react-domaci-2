import { createContext, useEffect } from "react";
import { useState } from "react";
import App from "../App";

const QuizContext = createContext();


export const QuizContextProvider = (props) => {
    const [isStarted, setIsStarted] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [timeout, setTimeout] = useState();
    const [finished, setFinished] = useState(false);
    const [tacniOdg, setTacniOdg] = useState(0);
    const [neTacniOdg, setNeTacniOdg] = useState(0);

    const updateTimer = () => {
        // if (seconds > 11) {
        // setMinutes(prev => prev + 1);
        // setSeconds(0);
        // }
        setSeconds(prev => prev + 1);
        // console.log(seconds);zasto se odje loguje stalno 0
    };
    // zasto mora i ovaj useEffect
    useEffect(() => {
        if (seconds > 59) {
            setMinutes(prev => prev + 1);
            setSeconds(0);
        }
        console.log(seconds)
    }, [seconds]);


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
            setSeconds(0);
            setMinutes(0);
            clearInterval(timeout);
        }

    }, [isStarted, finished])

    const reset = () => {
        setNeTacniOdg(0);
        setTacniOdg(0);
    };

    return (
        <QuizContext.Provider value={{ isStarted, setIsStarted, seconds, minutes, finished, setFinished, tacniOdg, setTacniOdg, neTacniOdg, setNeTacniOdg, reset }}><App /></QuizContext.Provider>
    )
};

export default QuizContext;