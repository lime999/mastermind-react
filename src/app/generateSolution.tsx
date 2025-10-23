

export function generateSolution(): number[] {
  let solution: number[] = [];
  for (let i = 0; i < 4; i++) {
    let randomNumber: number = Math.floor(Math.random() * 8)
    solution.push(randomNumber);
  }
  console.log("Solution generated:", solution);
  return solution;
}
