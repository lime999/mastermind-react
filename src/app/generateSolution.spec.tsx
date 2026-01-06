import { generateSolution } from "./generateSolution";

describe("generateSolution", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("when duplicatesAllowed is true, returns 4 numbers with duplicates", () => {
    jest
      .spyOn(global.Math, "random")
      .mockReturnValueOnce(0) // Math.floor(0 * 8) = 0
      .mockReturnValueOnce(0.5) // Math.floor(0.5 * 8) = 4
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.999); // Math.floor(0.999 * 8) = 7

    const result = generateSolution(true);
    expect(result).toEqual([0, 4, 4, 7]);
  });

  test("when duplicatesAllowed is false, returns 4 unique numbers in range 0..7 (shuffle branch)", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.000001);

    const result = generateSolution(false);

    expect(result).toHaveLength(4);
    expect(new Set(result).size).toBe(4);
    result.forEach((n) => {
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThanOrEqual(7);
    });
  });
});
