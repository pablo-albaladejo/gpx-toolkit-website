import React from 'react';
import streamMock from '../src/mocks/streams.json';
import './App.css';

import { saveAs } from 'file-saver';
import GPXToolkit from 'gpx-toolkit';

function App() {
  const config = {
    date: new Date(),
    title: 'test stream'
  };
  const gpx = GPXToolkit.streamToGPX(streamMock, config);
  var blob = new Blob([gpx], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `${new Date().toISOString()}.gpx`);
  return (
    <div className="App">
      <h1>{`Work in progress`}</h1>
      <span>{`Pablo Albaladejo Mestre - GPX Toolkit`}</span>
    </div>
  );
}

export default App;
