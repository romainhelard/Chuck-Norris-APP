import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <div id="chuckNorrisDiv">
      <img id='chuckimg' alt="chuck Norris" src='img/chucknorris-simpsons.png' />
    </div>

    <App />

    <div id="githubDiv">
      <a href="https://github.com/romainhelard"><img alt="Github" src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white" /></a>
    </div>
    </>
);
reportWebVitals();
