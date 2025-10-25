
export function checkSolution(
  currentGuess: number[],
  solution: number[],
  round: number,
  setAlertMessage: Function,
  setRound: Function
) {
  // if (currentGuess.includes(0)) {
  //   setAlertMessage("Please fill all pins before checking the solution.");
  //   return;
  // }

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
    `You have ${numberOfCorrectColorsInCorrectPosition} colors in the correct position, ${numberOfCorrectColorsInWrongPosition} correct colors in the wrong position `);
  return [numberOfCorrectColorsInCorrectPosition, numberOfCorrectColorsInWrongPosition];
}
