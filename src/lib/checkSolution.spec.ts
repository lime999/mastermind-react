import { checkSolution } from "./checkSolution";

describe("checkSolution", () => {
  test("completely correct guess", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [1, 2, 3, 4];

    const result = checkSolution(testGuess, testSolution);

    expect(result).toEqual({ correctPosition: 4, correctColor: 0 });
  });

  test("completely incorrect guess", () => {
    const testSolution = [0, 1, 2, 3];
    const testGuess = [4, 5, 6, 7];

    const result = checkSolution(testGuess, testSolution);

    expect(result).toEqual({ correctPosition: 0, correctColor: 0 });
  });

  test("partially correct guess (colors in correct position)", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [1, 0, 3, 5];

    const result = checkSolution(testGuess, testSolution);

    expect(result).toEqual({ correctPosition: 2, correctColor: 0 });
  });

  test("all correct colors but all in wrong position", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [4, 3, 2, 1];

    const result = checkSolution(testGuess, testSolution);

    expect(result).toEqual({ correctPosition: 0, correctColor: 4 });
  });

  test("combination of correct position and correct color", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [1, 3, 4, 2];

    const result = checkSolution(testGuess, testSolution);

    expect(result).toEqual({ correctPosition: 1, correctColor: 3 });
  });

  test("duplicate colors in guess with single color in solution", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [1, 1, 1, 1];

    const result = checkSolution(testGuess, testSolution);

    expect(result).toEqual({ correctPosition: 1, correctColor: 0 });
  });

  test("duplicate colors in solution and guess", () => {
    const testSolution = [1, 1, 2, 2];
    const testGuess = [1, 2, 1, 2];

    const result = checkSolution(testGuess, testSolution);

    expect(result).toEqual({ correctPosition: 2, correctColor: 2 });
  });
});

