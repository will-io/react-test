import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello This is willy Esquivel-Lopez from SWE432
        </p>

        <a
          className="gmu-link"
          href="http://mason.gmu.edu/~wesquive/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my mason website
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Here
        </a>

      </header>
    </div>
  );
}

export default App;
