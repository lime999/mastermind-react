export function ResetGame(
    setResults: (value: number[][]) => void,
    setRowColors: (value: number[][]) => void,
    setActivatedPins: (value: boolean[][]) => void,
    setRound: (value: number) => void,
    setFinishedGame: (value: boolean) => void,
    GenerateSolution: (value: boolean) => number[],
    setSolution: (value: number[]) => void,
) {
    setResults(
        Array(10).fill(null).map(() => [0, 0])
    );
    setRowColors(
        Array(10).fill(null).map(() => [0, 0, 0, 0])
    );
    setActivatedPins(
        Array(10).fill(null).map(() => [false, false, false, false])
    );
    setRound(1);
    setFinishedGame(false);
    setSolution(GenerateSolution(false));
}