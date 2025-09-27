'use client';

import { useState } from 'react';

type SquareProps = {
  background: number;
  onSquareClick?: () => void;
};
const colors =
  ["#000000ff", "#ff0000ff", "#00ff00ff", "#0000ffff",
    "#ffff00ff", "#00ffffff", "#ff00ffff", "#ffffffff"]

function Pin({ background, onSquareClick }: SquareProps) {

  return <button style={{ background: colors[background] }} className="pin" onClick={onSquareClick}></button>;

}
function allowedColors() {
  const buttons = [];
  for (let i = 1; i < 8; i++) {
    buttons.push(<button key={i} className="pin" style={{ backgroundColor: colors[i] }}></button>);
  }
  return buttons;
}

export default function Board() {

  const [round, setRound] = useState(1);
  const [pins, setPins] = useState(Array(40).fill(0));

  function handleClick(i: number) {
    if (i > round * 4 - 1) {
      return;
    }
    const nextPins = pins.slice();
    let nextColor

    if (pins[i] > 6) {

      nextColor = 0;
    } else {

      nextColor = (pins[i]) + 1;
    }

    nextPins[i] = nextColor;
    setPins(nextPins);

  }



  return (
    <div className="game">
      <div>
        <div className="board-row">
          <Pin background={pins[0]} onSquareClick={() => handleClick(0)} />
          <Pin background={pins[1]} onSquareClick={() => handleClick(1)} />
          <Pin background={pins[2]} onSquareClick={() => handleClick(2)} />
          <Pin background={pins[3]} onSquareClick={() => handleClick(3)} />
        </div>
        <div className="board-row">
          <Pin background={pins[4]} onSquareClick={() => handleClick(4)} />
          <Pin background={pins[5]} onSquareClick={() => handleClick(5)} />
          <Pin background={pins[6]} onSquareClick={() => handleClick(6)} />
          <Pin background={pins[7]} onSquareClick={() => handleClick(7)} />
        </div>
        <div className="board-row">
          <Pin background={pins[8]} onSquareClick={() => handleClick(8)} />
          <Pin background={pins[9]} onSquareClick={() => handleClick(9)} />
          <Pin background={pins[10]} onSquareClick={() => handleClick(10)} />
          <Pin background={pins[11]} onSquareClick={() => handleClick(11)} />
        </div>
        <div className="board-row">
          <Pin background={pins[12]} onSquareClick={() => handleClick(12)} />
          <Pin background={pins[13]} onSquareClick={() => handleClick(13)} />
          <Pin background={pins[14]} onSquareClick={() => handleClick(14)} />
          <Pin background={pins[15]} onSquareClick={() => handleClick(15)} />
        </div>
        <div className="board-row">
          <Pin background={pins[16]} onSquareClick={() => handleClick(16)} />
          <Pin background={pins[17]} onSquareClick={() => handleClick(17)} />
          <Pin background={pins[18]} onSquareClick={() => handleClick(18)} />
          <Pin background={pins[19]} onSquareClick={() => handleClick(19)} />
        </div>
        <div className="board-row">
          <Pin background={pins[20]} onSquareClick={() => handleClick(20)} />
          <Pin background={pins[21]} onSquareClick={() => handleClick(21)} />
          <Pin background={pins[22]} onSquareClick={() => handleClick(22)} />
          <Pin background={pins[23]} onSquareClick={() => handleClick(23)} />
        </div>
        <div className="board-row">
          <Pin background={pins[24]} onSquareClick={() => handleClick(24)} />
          <Pin background={pins[25]} onSquareClick={() => handleClick(25)} />
          <Pin background={pins[26]} onSquareClick={() => handleClick(26)} />
          <Pin background={pins[27]} onSquareClick={() => handleClick(27)} />
        </div>
        <div className="board-row">
          <Pin background={pins[28]} onSquareClick={() => handleClick(28)} />
          <Pin background={pins[29]} onSquareClick={() => handleClick(29)} />
          <Pin background={pins[30]} onSquareClick={() => handleClick(30)} />
          <Pin background={pins[31]} onSquareClick={() => handleClick(31)} />
        </div>
        <div className="board-row">
          <Pin background={pins[32]} onSquareClick={() => handleClick(32)} />
          <Pin background={pins[33]} onSquareClick={() => handleClick(33)} />
          <Pin background={pins[34]} onSquareClick={() => handleClick(34)} />
          <Pin background={pins[35]} onSquareClick={() => handleClick(35)} />
        </div>
        <div className="board-row">
          <Pin background={pins[36]} onSquareClick={() => handleClick(36)} />
          <Pin background={pins[37]} onSquareClick={() => handleClick(37)} />
          <Pin background={pins[38]} onSquareClick={() => handleClick(38)} />
          <Pin background={pins[39]} onSquareClick={() => handleClick(39)} />
        </div>
      </div>
      <div className="side-panel">
        <button className="lock-in-btn">Lock In</button>
        <h1>Round {round}/10</h1>
        <h1>These are the allowed colors:</h1>
        <div>
          {allowedColors()}
        </div>
      </div>
    </div>
  );
}



