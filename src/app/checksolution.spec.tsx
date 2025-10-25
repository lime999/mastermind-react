import { checkSolution } from "./checkSolution";

describe("comparing function gives results feedback with ", () => {
  // first array is the guess, second one the solution
  // first number in the last array is the number of correct, 2nd number of false and 3rd number of in combination
  test("completely correct guess", () => {
    let testSolution = [1, 2, 3, 4];
    let testGuess = [1, 2, 3, 4];

    let result = checkSolution(
      testGuess,
      testSolution,
      1,
      () => { },
      () => { }
    );
    expect(result).toEqual([4, 0]);
  });
  test("completely incorrect guess", () => {
    let testSolution = [0, 1, 2, 3];
    let testGuess = [4, 5, 6, 7];

    let result = checkSolution(
      testGuess,
      testSolution,
      1,
      () => { },
      () => { }
    );
    expect(result).toEqual([0, 0]);
  });
  test("partially correct guess", () => {
    let testSolution = [1, 2, 3, 4];
    let testGuess = [1, 0, 3, 5];

    let result = checkSolution(
      testGuess,
      testSolution,
      1,
      () => { },
      () => { }
    );
    expect(result).toEqual([2, 0]);
  });
  test("all correct colors but all in wrong position", () => {
    let testSolution = [1, 2, 3, 4];
    let testGuess = [4, 3, 2, 1];

    let result = checkSolution(
      testGuess,
      testSolution,
      1,
      () => { },
      () => { }
    );
    expect(result).toEqual([0, 4]);
  });

  test("partially correct guess", () => {
    let testSolution = [1, 2, 3, 4];
    let testGuess = [1, 3, 4, 2];

    let result = checkSolution(
      testGuess,
      testSolution,
      1,
      () => { },
      () => { }
    );
    expect(result).toEqual([1, 3]);
  });
  test("partially correct guess with only duplicate colors in the guess", () => {
    let testSolution = [1, 1, 1, 1];
    let testGuess = [1, 3, 4, 2];

    let result = checkSolution(
      testGuess,
      testSolution,
      1,
      () => { },
      () => { }
    );
    expect(result).toEqual([1, 0]);
  });
  test("partially correct guess with only duplicate colors in the guess", () => {
    let testSolution = [3, 3, 3, 3];
    let testGuess = [3, 3, 4, 2];

    let result = checkSolution(
      testGuess,
      testSolution,
      1,
      () => { },
      () => { }
    );
    expect(result).toEqual([2, 0]);
  });
  test("partially correct guess with only duplicate colors in the guess", () => {
    let testSolution = [4, 4, 4, 4];
    let testGuess = [4, 4, 4, 2];

    let result = checkSolution(
      testGuess,
      testSolution,
      1,
      () => { },
      () => { }
    );
    expect(result).toEqual([3, 0]);
  });








});
