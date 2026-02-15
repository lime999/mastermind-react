export function generateSolution(): number[] {

  const solution: number[] = [];

  const colors = [0, 1, 2, 3, 4, 5, 6, 7];
  for (let i = 0; i < 4; i++) {
    const idx = Math.floor(Math.random() * colors.length);
    solution.push(colors.splice(idx, 1)[0]);
  }

  return solution;
}
