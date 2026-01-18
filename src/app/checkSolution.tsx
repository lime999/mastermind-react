export function CheckSolution(
  finishedGame: boolean,
  currentGuess: number[],
  solution: number[],
  round: number,
  setAlertMessage: (message: string) => void,
  setRound: (round: number) => void,
  setFinishedGame: (finishedGame: boolean) => void,
  activatedPins: boolean[][],
  setResults: (value: number[][] | ((prevState: number[][]) => number[][])) => void,
) {
  if (round === 11) {
    setAlertMessage("You lost :(")
    setFinishedGame(true)
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
  const positionOfCompletelyCorrect = [false, false, false, false];

  for (let i = 0; i !== 4; i++) {
    // checking for completely correct colors
    if (currentGuess[i] === solution[i]) {
      numberOfCorrectColorsInCorrectPosition++;
      positionOfCompletelyCorrect[i] = true;
    }
  }

  // checking for colors in the wrong position
  const solutionUsed = [...positionOfCompletelyCorrect];

  for (let i = 0; i !== 4; i++) {
    if (!positionOfCompletelyCorrect[i]) {
      for (let a = 0; a !== 4; a++) {
        if (currentGuess[i] === solution[a] && !solutionUsed[a]) {
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
    setRound(12);
  }
  if (round === 10 && numberOfCorrectColorsInCorrectPosition < 4) {
    setAlertMessage("You lost :(")
    setFinishedGame(true)
  }
  return [numberOfCorrectColorsInCorrectPosition, numberOfCorrectColorsInWrongPosition];
}
