import { CheckSolution } from "./CheckSolution";

describe("comparing function gives results feedback with ", () => {
  // first array is the guess, second one the solution
  // first number in the last array is the number of correct, 2nd number of false and 3rd number of in combination
  test("completely correct guess", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [1, 2, 3, 4];
    const activatedPins = Array(10).fill(null).map(() => [true, true, true, true]);

    const result = CheckSolution(
      false,
      testGuess,
      testSolution,
      1,
      () => { },
      () => { },
      () => { },
      activatedPins,
      () => { }

    );
    expect(result).toEqual([4, 0]);
  });
  test("completely incorrect guess", () => {
    const testSolution = [0, 1, 2, 3];
    const testGuess = [4, 5, 6, 7];
    const activatedPins = Array(10).fill(null).map(() => [true, true, true, true]);

    const result = CheckSolution(
      false,
      testGuess,
      testSolution,
      1,
      () => { },
      () => { },
      () => { },
      activatedPins,
      () => { }

    );
    expect(result).toEqual([0, 0]);
  });
  test("partially correct guess", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [1, 0, 3, 5];
    const activatedPins = Array(10).fill(null).map(() => [true, true, true, true]);

    const result = CheckSolution(
      false,
      testGuess,
      testSolution,
      1,
      () => { },
      () => { },
      () => { },
      activatedPins,
      () => { }

    );
    expect(result).toEqual([2, 0]);
  });
  test("all correct colors but all in wrong position", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [4, 3, 2, 1];
    const activatedPins = Array(10).fill(null).map(() => [true, true, true, true]);

    const result = CheckSolution(
      false,
      testGuess,
      testSolution,
      1,
      () => { },
      () => { },
      () => { },
      activatedPins,
      () => { }

    );
    expect(result).toEqual([0, 4]);
  });

  test("partially correct guess", () => {
    const testSolution = [1, 2, 3, 4];
    const testGuess = [1, 3, 4, 2];
    const activatedPins = Array(10).fill(null).map(() => [true, true, true, true]);

    const result = CheckSolution(
      false,
      testGuess,
      testSolution,
      1,
      () => { },
      () => { },
      () => { },
      activatedPins,
      () => { }

    );
    expect(result).toEqual([1, 3]);
  });
  test("partially correct guess with only duplicate colors in the guess", () => {
    const testSolution = [1, 1, 1, 1];
    const testGuess = [1, 3, 4, 2];
    const activatedPins = Array(10).fill(null).map(() => [true, true, true, true]);

    const result = CheckSolution(
      false,
      testGuess,
      testSolution,
      1,
      () => { },
      () => { },
      () => { },
      activatedPins,
      () => { }

    );
    expect(result).toEqual([1, 0]);
  });
  test("partially correct guess with only duplicate colors in the guess", () => {
    const testSolution = [3, 3, 3, 3];
    const testGuess = [3, 3, 4, 2];
    const activatedPins = Array(10).fill(null).map(() => [true, true, true, true]);

    const result = CheckSolution(
      false,
      testGuess,
      testSolution,
      1,
      () => { },
      () => { },
      () => { },
      activatedPins,
      () => { }

    );
    expect(result).toEqual([2, 0]);
  });
  test("partially correct guess with only duplicate colors in the guess", () => {
    const testSolution = [4, 4, 4, 4];
    const testGuess = [4, 4, 4, 2];
    const activatedPins = Array(10).fill(null).map(() => [true, true, true, true]);

    const result = CheckSolution(
      false,
      testGuess,
      testSolution,
      1,
      () => { },
      () => { },
      () => { },
      activatedPins,
      () => { }

    );
    expect(result).toEqual([3, 0]);
  });








});
