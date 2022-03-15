import './App.css';
import Pitanje from './components/Pitanje/Pitanje';
import Pocetna from './components/Pocetna/Pocetna';
import { useContext, useEffect, useState } from "react";
import pitanjaIodgovori from './pitanjaIodgovori.json';
import QuizContext from './store/QuizContext';
import ZavrsenKviz from './components/ZavrsenKviz/ZavrsenKviz';

function App() {

  // const { pitanjeIndex } = useContext(QuizContext);
  // const [pitanjeIndex, setPitanjeIndex] = useState(0);
  const { finished, isStarted } = useContext(QuizContext);

  // const sledecePitanje = () => {
  //   setPitanjeIndex(prev => prev + 1);
  // }

  // useEffect(() => {

  // <Pitanje pitanja={pitanjaIodgovori[pitanjeIndex]} sledecePitanje={sledecePitanje} />

  // }, [pitanjeIndex])

  return (
    <>
      {!isStarted && !finished && <Pocetna />}
      {isStarted && !finished && <Pitanje pitanjaIodgovori={pitanjaIodgovori} />}
      {!isStarted && finished && <ZavrsenKviz ukupanBroj={pitanjaIodgovori.length} />}
    </>

  );
}

export default App;
