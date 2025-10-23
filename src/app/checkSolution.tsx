  import { colors } from "./pinColors";


  export function checkSolution(pins: number[], round: number, solution: string[]) {
    let currentGuess = pins.slice((round - 1) * 4, round * 4);
    if (currentGuess.includes(0)) {
      return["Please fill all pins before checking the solution.", ""]
    }




    setRound(round + 1);
  }