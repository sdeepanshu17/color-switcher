import React, { useState } from "react";
import Header from "./Header";
import hexCode from "./colourArr";

function App() {

  let ind = Math.floor(Math.random()*hexCode.length);
  let [color, setColor] = useState(hexCode[ind].code.hex);

  function randomColor() {
    ind = Math.floor(Math.random()*hexCode.length);
    setColor(hexCode[ind].code.hex);
  }

  return (
    <div style={{background: color}} className="App">
      <Header />
      <div className="color-info">
        <p className="color-text">Background Color: <span style={{color: color}}>{color}</span></p>
        <p><button onClick={randomColor}>Change</button></p>
      </div>
    </div>
  );
}

export default App;
