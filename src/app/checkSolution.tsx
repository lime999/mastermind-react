import { setFlagsFromString } from "v8";

export function checkSolution(
  finishedGame: boolean,
  currentGuess: number[],
  solution: number[],
  round: number,
  setAlertMessage: Function,
  setRound: Function,
  setFinishedGame: Function
) {
  if (round >= 10) {
    setAlertMessage("The game is over");
    setFinishedGame(true);
    return
  } else if ( finishedGame ) {
    setAlertMessage("The game is over");
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
  setAlertMessage(
    numberOfCorrectColorsInCorrectPosition < 4 ? `You have ${numberOfCorrectColorsInCorrectPosition} colors in the correct position, ${numberOfCorrectColorsInWrongPosition} correct colors in the wrong position ` : "You cracked the code!", setFinishedGame(numberOfCorrectColorsInCorrectPosition === 4));
  return [numberOfCorrectColorsInCorrectPosition, numberOfCorrectColorsInWrongPosition];
}
