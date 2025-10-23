
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

  let numberOfCorrect = 0;
  let numberOfInCombination = 0;
  let numberOfFalse = 0;
  let positionOfCompletelyCorrect = [false, false, false, false];

  for (let i = 0; i !== 4; i++) {
    // checking for completely correct colors

    if (currentGuess[i] == solution[i]) {
      numberOfCorrect++;
      positionOfCompletelyCorrect[i] = true;
    }

    // checking for false colors
    else if (solution.includes(currentGuess[i]) == false) {
      numberOfFalse++;
    }
  }

  // checking for colors in the wrong position

  let hasMatched = false;
  for (let i = 0; i !== 4; i++) {
    if (!positionOfCompletelyCorrect[i]) {
      for (let a = 0; a !== 4; a++) {
        if (
          currentGuess[i] == solution[a] &&
          !positionOfCompletelyCorrect[i] &&
          !hasMatched
        ) {
          numberOfInCombination++;
          hasMatched = true;
        }
      }
      hasMatched = false;
    }
  }

  setRound(round + 1);
  setAlertMessage(
    `You have ${numberOfCorrect} colors in the correct position, ${numberOfInCombination} correct colors in the wrong position, and ${numberOfFalse} wrong colors.`
  );
}


