import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeckGL, { IconLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";
import destinationPoint from "./destinationPoint";
import Airplane from "./airplane_icon";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
