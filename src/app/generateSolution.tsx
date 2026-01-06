export function generateSolution(duplicatesAllowed: boolean): number[] {

  const solution: number[] = [];
  if (duplicatesAllowed) {
    for (let i = 0; i < 4; i++) {
      const randomNumber: number = Math.floor(Math.random() * 8)
      solution.push(randomNumber);
    }
  } else {
    const colors = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < 4; i++) {
      const idx = Math.floor(Math.random() * colors.length);
      solution.push(colors.splice(idx, 1)[0]);
    }
  }

  console.log("Current solution:", solution);
  return solution;
}
