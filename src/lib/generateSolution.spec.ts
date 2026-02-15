import { generateSolution } from "./generateSolution";

describe("generateSolution", () => {

  test("generates a solution with 4 unique colors", () => {
    const solution = generateSolution();

    expect(solution.length).toBe(4);
    expect(solution[0]).not.toBe(solution[1]);
    expect(solution[1]).not.toBe(solution[2]);
    expect(solution[2]).not.toBe(solution[3]);
  })

})
