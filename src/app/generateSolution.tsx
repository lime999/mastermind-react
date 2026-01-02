

export function generateSolution(doubleColorsEnabled: boolean): number[] {
  
  let solution: number[] = [];
  if (doubleColorsEnabled) {
    for (let i = 0; i < 4; i++) {
      const randomNumber: number = Math.floor(Math.random() * 8)
      solution.push(randomNumber);
    }
  } else {

    const colors = [0, 1, 2, 3, 4, 5, 6, 7];

    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    solution = colors.slice(0, 4)
  }

  console.log("Current solution:", solution);
  return solution;
}
