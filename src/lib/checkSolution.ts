/**
 * Checks the current guess against the solution and returns the result.
 * 
 * @param currentGuess - An array of 4 numbers representing the player's guess.
 * @param solution - An array of 4 numbers representing the secret solution.
 * @returns An object containing the number of correct pins in the correct position 
 *          and the number of correct colors in the wrong position.
 */
export function checkSolution(
  currentGuess: number[],
  solution: number[],
) {
  let numberOfCorrectColorsInCorrectPosition = 0;
  let numberOfCorrectColorsInWrongPosition = 0;

  const positionOfCompletelyCorrect = [false, false, false, false];
  const solutionUsed = [false, false, false, false];

  // First pass: Find correct colors in correct positions (Black pins)
  for (let i = 0; i < 4; i++) {
    if (currentGuess[i] === solution[i]) {
      numberOfCorrectColorsInCorrectPosition++;
      positionOfCompletelyCorrect[i] = true;
      solutionUsed[i] = true;
    }
  }

  // Second pass: Find correct colors in wrong positions (White pins)
  for (let i = 0; i < 4; i++) {
    if (!positionOfCompletelyCorrect[i]) {
      for (let j = 0; j < 4; j++) {
        if (!solutionUsed[j] && currentGuess[i] === solution[j]) {
          numberOfCorrectColorsInWrongPosition++;
          solutionUsed[j] = true;
          break;
        }
      }
    }
  }

  return {
    correctPosition: numberOfCorrectColorsInCorrectPosition,
    correctColor: numberOfCorrectColorsInWrongPosition
  };
}

