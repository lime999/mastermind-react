"use client";

import { useState } from "react";
import { generateSolution } from "../lib/generateSolution";
import { checkSolution } from "../lib/checkSolution";
import { Row } from "../components/Row";
import { Popup } from "../components/Popup";
import { resultNumbers } from "../components/ResultNumbers";
import { MessagePopup } from "../components/MessagePopup";
import { resetGame } from "../lib/resetGame";
import { colors } from "../lib/pinColors";

const initialSolution = generateSolution();

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
  const [messagePopupVisible, setMessagePopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [round, setRound] = useState(1);
  const [finishedGame, setFinishedGame] = useState(false);
  const [solution, setSolution] = useState(initialSolution);

  const handleColorChange = (newColor: number) => {
    if (finishedGame || !selectedPin) return;

    const { row: rowId, pin: pinId } = selectedPin;

    setRowColors(prev => {
      const updated = [...prev];
      updated[rowId] = [...updated[rowId]];
      updated[rowId][pinId] = newColor;
      return updated;
    });

    setActivatedPins(prev => {
      const updated = [...prev];
      updated[rowId] = [...updated[rowId]];
      updated[rowId][pinId] = true;
      return updated;
    });
  };

  const handleCheckSolution = () => {
    if (finishedGame) {
      setPopupMessage("The game is over");
      setMessagePopupVisible(true);
      return;
    }

    if (round > 10) {
      setPopupMessage("You lost :(");
      setFinishedGame(true);
      setMessagePopupVisible(true);
      return;
    }

    if (activatedPins[round - 1].includes(false)) {
      setPopupMessage("Please fill all pins before checking the solution");
      setMessagePopupVisible(true);
      return;
    }

    const currentGuess = rowColors[round - 1];
    const { correctPosition, correctColor } = checkSolution(currentGuess, solution);

    setResults(prev => {
      const updated = [...prev];
      updated[round - 1] = [correctPosition, correctColor];
      return updated;
    });

    if (correctPosition === 4) {
      setPopupMessage("Congratulations! You've guessed the solution!");
      setFinishedGame(true);
      setMessagePopupVisible(true);
    } else if (round === 10) {
      setPopupMessage("You lost :(");
      setFinishedGame(true);
      setMessagePopupVisible(true);
    } else {
      setRound(prev => prev + 1);
    }
  };

  const handleReset = () => {
    resetGame(
      setResults,
      setRowColors,
      setActivatedPins,
      setRound,
      setFinishedGame,
      generateSolution,
      setSolution
    );
  };

  return (
    <div className="wrapper">
      {popupVisible && (
        <Popup
          onColorSelect={(newColor) => {
            handleColorChange(newColor);
            setPopupVisible(false);
            setSelectedPin(null);
          }}
          handlePopupClose={() => {
            setPopupVisible(false);
            setSelectedPin(null);
          }}
        />
      )}

      {messagePopupVisible && (
        <MessagePopup
          handlePopupClose={() => {
            setMessagePopupVisible(false);
            setPopupMessage("");
          }}
          message={popupMessage}
          solution={solution}
          colors={colors}
        />
      )}

      <div className="game">
        <div className="results-panel">
          {resultNumbers(results, setMessagePopupVisible, setPopupMessage)}
        </div>
        <div className="board">
          {rowColors.map((colors, rowId) => (
            <Row
              key={rowId}
              rowId={rowId}
              pinColors={colors}
              enabled={!finishedGame && round - 1 === rowId}
              openPopup={(rId, pId) => {
                if (!finishedGame && round - 1 === rId) {
                  setPopupVisible(true);
                  setSelectedPin({ row: rId, pin: pId });
                }
              }}
              selectedPin={selectedPin}
              activatedPins={activatedPins}
            />
          ))}
        </div>
      </div>

      <div className="side-panel">
        <button
          className="check-solution-btn"
          onClick={handleCheckSolution}
          disabled={finishedGame}
        >
          Verify guess
        </button>

        <button
          className="reset-btn"
          onClick={handleReset}
        >
          Reset Game
        </button>

        {finishedGame && (
          <button
            className="show-solution-btn"
            onClick={() => {
              setMessagePopupVisible(true);
              setPopupMessage("showsolution");
            }}
          >
            Show Solution
          </button>
        )}

        <button
          className="info-btn"
          onClick={() => {
            setMessagePopupVisible(true);
            setPopupMessage("info");
          }}
          aria-label="Info"
        />
      </div>
    </div>
  );
}

