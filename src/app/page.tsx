'use client';

import { useState } from 'react';
import { colors } from './pinColors';
import { exampleColors } from './exampleColors';
import { generateSolution } from './generateSolution';
import { checkSolution } from './checkSolution';


type pinProps = {
  background: number;
  onPinClick?: () => void;
};

function Pin({ background, onPinClick }: pinProps) {

  return <button style={{ background: colors[background] }} className="pin" onClick={onPinClick}></button>;

}



export default function Board() {

  const [solution, setSolution] = useState(() => {generateSolution()});
  
  const [alertMessage, setAlertMessage] = useState("");
  const [round, setRound] = useState(1);
  const [pins, setPins] = useState(Array(40).fill(0));



  function handleClick(i: number) {
    if (i > round * 4 - 1 || i < (round * 4 - 4)) {
      return;
    }
    const nextPins = pins.slice();
    let nextColor

    if (pins[i] > 6) {

      nextColor = 0;
    } else {

      nextColor = pins[i] + 1;
    }

    nextPins[i] = nextColor;
    setPins(nextPins);

  }



  return (
    <div className="game">
      <div>
        <div className="board-row">
          <Pin background={pins[0]} onPinClick={() => handleClick(0)} />
          <Pin background={pins[1]} onPinClick={() => handleClick(1)} />
          <Pin background={pins[2]} onPinClick={() => handleClick(2)} />
          <Pin background={pins[3]} onPinClick={() => handleClick(3)} />
        </div>
        <div className="board-row">
          <Pin background={pins[4]} onPinClick={() => handleClick(4)} />
          <Pin background={pins[5]} onPinClick={() => handleClick(5)} />
          <Pin background={pins[6]} onPinClick={() => handleClick(6)} />
          <Pin background={pins[7]} onPinClick={() => handleClick(7)} />
        </div>
        <div className="board-row">
          <Pin background={pins[8]} onPinClick={() => handleClick(8)} />
          <Pin background={pins[9]} onPinClick={() => handleClick(9)} />
          <Pin background={pins[10]} onPinClick={() => handleClick(10)} />
          <Pin background={pins[11]} onPinClick={() => handleClick(11)} />
        </div>
        <div className="board-row">
          <Pin background={pins[12]} onPinClick={() => handleClick(12)} />
          <Pin background={pins[13]} onPinClick={() => handleClick(13)} />
          <Pin background={pins[14]} onPinClick={() => handleClick(14)} />
          <Pin background={pins[15]} onPinClick={() => handleClick(15)} />
        </div>
        <div className="board-row">
          <Pin background={pins[16]} onPinClick={() => handleClick(16)} />
          <Pin background={pins[17]} onPinClick={() => handleClick(17)} />
          <Pin background={pins[18]} onPinClick={() => handleClick(18)} />
          <Pin background={pins[19]} onPinClick={() => handleClick(19)} />
        </div>
        <div className="board-row">
          <Pin background={pins[20]} onPinClick={() => handleClick(20)} />
          <Pin background={pins[21]} onPinClick={() => handleClick(21)} />
          <Pin background={pins[22]} onPinClick={() => handleClick(22)} />
          <Pin background={pins[23]} onPinClick={() => handleClick(23)} />
        </div>
        <div className="board-row">
          <Pin background={pins[24]} onPinClick={() => handleClick(24)} />
          <Pin background={pins[25]} onPinClick={() => handleClick(25)} />
          <Pin background={pins[26]} onPinClick={() => handleClick(26)} />
          <Pin background={pins[27]} onPinClick={() => handleClick(27)} />
        </div>
        <div className="board-row">
          <Pin background={pins[28]} onPinClick={() => handleClick(28)} />
          <Pin background={pins[29]} onPinClick={() => handleClick(29)} />
          <Pin background={pins[30]} onPinClick={() => handleClick(30)} />
          <Pin background={pins[31]} onPinClick={() => handleClick(31)} />
        </div>
        <div className="board-row">
          <Pin background={pins[32]} onPinClick={() => handleClick(32)} />
          <Pin background={pins[33]} onPinClick={() => handleClick(33)} />
          <Pin background={pins[34]} onPinClick={() => handleClick(34)} />
          <Pin background={pins[35]} onPinClick={() => handleClick(35)} />
        </div>
        <div className="board-row">
          <Pin background={pins[36]} onPinClick={() => handleClick(36)} />
          <Pin background={pins[37]} onPinClick={() => handleClick(37)} />
          <Pin background={pins[38]} onPinClick={() => handleClick(38)} />
          <Pin background={pins[39]} onPinClick={() => handleClick(39)} />
        </div>
      </div>
      <div className="side-panel">
        <button className="check-solution-btn" onClick={checkSolution}>Lock In</button>
        <h2>{alertMessage}</h2>
        <h1>Round {round}/10</h1>
        <h1>These are the allowed colors in the order you can select them:</h1>
        <div>
          {exampleColors()}
        </div>
      </div>
    </div>
  );
}



