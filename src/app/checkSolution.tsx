
export function checkSolution(
  finishedGame: boolean,
  currentGuess: number[],
  solution: number[],
  round: number,
  setAlertMessage: Function,
  setRound: Function,
  setFinishedGame: Function,
  activatedPins: boolean[][],
  setResults: Function
) {
  setAlertMessage("");
  if (round >= 10) {
    setAlertMessage("The game is over");
    setFinishedGame(true);
    return
  } else if (finishedGame) {
    setAlertMessage("The game is over");
    return;
  } else if (activatedPins[round - 1].includes(false)) {
    setAlertMessage("Please fill all pins before checking the solution");
    return;
  }

  let numberOfCorrectColorsInCorrectPosition = 0;
  let numberOfCorrectColorsInWrongPosition = 0;
  let positionOfCompletelyCorrect = [false, false, false, false];

  for (let i = 0; i !== 4; i++) {
    // checking for completely correct colors

    if (currentGuess[i] == solution[i]) {
      numberOfCorrectColorsInCorrectPosition++;
      positionOfCompletelyCorrect[i] = true;
    }
  }

  // checking for colors in the wrong position
  let solutionUsed = [...positionOfCompletelyCorrect];

  for (let i = 0; i !== 4; i++) {
    if (!positionOfCompletelyCorrect[i]) {
      for (let a = 0; a !== 4; a++) {
        if (currentGuess[i] == solution[a] && !solutionUsed[a]) {
          numberOfCorrectColorsInWrongPosition++;
          solutionUsed[a] = true;
          break;
        }
      }
    }
  }

  setRound(round + 1);

  setResults((prev: number[][]) => {
    const updated = prev.map((roundResults, idx) =>
      idx === round - 1
        ? [numberOfCorrectColorsInCorrectPosition, numberOfCorrectColorsInWrongPosition]
        : roundResults
    );
    return updated;
  });
  if (numberOfCorrectColorsInCorrectPosition === 4) {
    setAlertMessage("Congratulations! You've guessed the solution!");
    setFinishedGame(true);
  }
  return [numberOfCorrectColorsInCorrectPosition, numberOfCorrectColorsInWrongPosition];
}
