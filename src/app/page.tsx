"use client";

import { useState } from "react";
import { exampleColors } from "./exampleColors";
import { generateSolution } from "./generateSolution";
import { checkSolution } from "./checkSolution";
import { Row } from "./row";
import { Popup } from "./popup";
const generatedSolution = generateSolution();


export default function Board() {

  const [finishedGame, setFinishedGame] = useState(false);
  const [solution, setSolution] = useState(generatedSolution);
  const [rowColors, setRowColors] = useState(
    Array(10).fill(null).map(() => [0, 0, 0, 0])
  );
  const [selectedPin, setSelectedPin] = useState<{ row: number; pin: number } | null>(null);

  const [popupVisible, setPopupVisible] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [round, setRound] = useState(1);

  const handleColorChange = (rowId: number, pinId: number, newColor: number) => {
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
  };


  return (
    <div>
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
      <div className="game">
        <div>
          {rowColors.map((rowColors, rowId) => (
            <Row
              key={rowId}
              rowId={rowId}
              pinColors={rowColors}
              enabled={round - 1 === rowId}
              openPopup={(rowId, pinId) => { setPopupVisible(true); setSelectedPin({ row: rowId, pin: pinId }); }}
              selectedPin={selectedPin}
            />
          ))}
        </div>

        <div className="side-panel">
          <button
            className="check-solution-btn"
            onClick={() => checkSolution(finishedGame, rowColors[round - 1], solution, round, setAlertMessage, setRound, setFinishedGame)}
          >
            Verify guess
          </button>
          <h2>{alertMessage}</h2>
          <h1>Round {round}/10</h1>
          <h1>These are the allowed colors:</h1>
          <div>{exampleColors()}</div>
        </div>
      </div>
    </div>
  );
}
