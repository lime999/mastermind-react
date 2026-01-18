"use client";

import { useState } from "react";
import { GenerateSolution } from "./GenerateSolution";
import { CheckSolution } from "./CheckSolution";
import { Row } from "./Row";
import { Popup } from "./Popup";
import { getResultNumbers } from "./ResultNumbers";
import { MessagePopup } from "./MessagePopup";
import { ResetGame } from "./ResetGame";
import { COLORS } from "./PinColors";

const generatedSolution = GenerateSolution(false);


export default function Board() {

  const [results, setResults] = useState<number[][]>(
    Array(10).fill(null).map(() => [0, 0])
  );

  const [rowColors, setRowColors] = useState(
    Array(10).fill(null).map(() => [0, 0, 0, 0])
  );

  const [activatedPins, setActivatedPins] = useState(
    Array(10).fill(null).map(() => [false, false, false, false])
  );
  const [doubleColorsEnabled, setDoubleColors] = useState(false);
  const [selectedPin, setSelectedPin] = useState<{ row: number; pin: number } | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [messagePopupVisible, setMessagePopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [round, setRound] = useState(1);
  const [finishedGame, setFinishedGame] = useState(false);
  const [solution, setSolution] = useState(generatedSolution);



  const handleColorChange = (rowId: number, pinId: number, newColor: number) => {
    if (finishedGame) {
      return;
    }
    setSelectedPin({ row: rowId, pin: pinId });
    setPopupVisible(true);
    setRowColors(prev => {
      const updated = prev.map((row, idx) =>
        idx === rowId
          ? row.map((color, pIdx) => pIdx === pinId ? newColor : color)
          : row
      );
      return updated;
    });
    setActivatedPins(prev => {
      const updated = prev.map((row, idx) =>
        idx === rowId
          ? row.map((activated, pIdx) => pIdx === pinId ? true : activated)
          : row
      );
      return updated;
    });
    setSelectedPin(null);
  };


  return (
    <div
      className="wrapper"
    >
      {popupVisible && (
        <Popup
          onColorSelect={(newColor) => {
            if (selectedPin) {
              handleColorChange(selectedPin.row, selectedPin.pin, newColor);
            }
            setSelectedPin(null);
            setPopupVisible(false);
          }}
          handlePopupClose={() => {
            setPopupVisible(false)
            setSelectedPin(null);
          }}
        />)}
      {messagePopupVisible && (
        <MessagePopup
          handlePopupClose={() => {
            setMessagePopupVisible(false);
            setPopupMessage("");
          }}
          message={popupMessage}
          solution={solution}
          colors={COLORS}
        />)}

      <div className="game">
        <div className="results-panel">
          {getResultNumbers(results, setMessagePopupVisible, setPopupMessage)}
        </div>
        <div className="board">
          {rowColors.map((rowColors, rowId) => (
            <Row
              key={rowId}
              rowId={rowId}
              pinColors={rowColors}
              enabled={round - 1 === rowId}
              openPopup={(rowId, pinId) => { setPopupVisible(true); setSelectedPin({ row: rowId, pin: pinId }); }}
              selectedPin={selectedPin}
              activatedPins={activatedPins}
            />
          ))}
        </div>
      </div>
      <div className="side-panel">
        <button
          className="check-solution-btn"
          onClick={() => CheckSolution(finishedGame, rowColors[round - 1], solution, round, (a: string) => { setMessagePopupVisible(true), setPopupMessage(a) }, setRound, setFinishedGame, activatedPins, setResults)}
        >
          Verify guess
        </button>

        <button
          className="reset-btn"
          onClick={() => ResetGame(setResults, setRowColors, setActivatedPins, setRound, setFinishedGame, GenerateSolution, setSolution)}
        >
          Reset Game
        </button>
        {finishedGame &&
          (<button
            className="show-solution-btn"
            onClick={() => {
              setMessagePopupVisible(true);
              setPopupMessage("showsolution");
            }}
          >
            show Solution
          </button>)}
      </div>
    </div>
  );
}
