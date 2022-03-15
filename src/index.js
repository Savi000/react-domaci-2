import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QuizContextProvider } from './store/QuizContext';

ReactDOM.render(
  <QuizContextProvider>
    <App />
  </QuizContextProvider>,
  document.getElementById('root')
);


