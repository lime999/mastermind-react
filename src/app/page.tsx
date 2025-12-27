"use client";

import { useState } from "react";
import { generateSolution } from "./generateSolution";
import { checkSolution } from "./checkSolution";
import { Row } from "./row";
import { Popup } from "./popup";
import { resultNumbers } from "./resultNumbers";
import {ExplanationPopup } from "./explanantionPopup";
const generatedSolution = generateSolution();


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

  const [selectedPin, setSelectedPin] = useState<{ row: number; pin: number } | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [explanationPopupVisible, setExplanationPopupVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [round, setRound] = useState(1);
  const [finishedGame, setFinishedGame] = useState(false);
  const [solution, setSolution] = useState(generatedSolution);

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
    setActivatedPins(prev => {
      const updated = prev.map((row, idx) =>
        idx === rowId
          ? row.map((activated, pIdx) => pIdx === pinId ? true : activated)
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
      {explanationPopupVisible && (
        <ExplanationPopup
          handlePopupClose={() => {
            setExplanationPopupVisible(false);
          }}

        />)}








      <div className="game">
        
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

        <div className="results-panel">
          {resultNumbers(results, setExplanationPopupVisible)}

        </div>

        <div className="side-panel">
          <button
            className="check-solution-btn"
            onClick={() => checkSolution(finishedGame, rowColors[round - 1], solution, round, setAlertMessage, setRound, setFinishedGame, activatedPins, setResults)}
          >
            Verify guess
          </button>
          <div >{alertMessage}</div>
        </div>
      </div>
    </div>
  );
}
