import { colors } from './pinColors';
import { useState } from 'react';
export function generateSolution() {  

    let solution = [];
    for (let i = 0; i < 4; i++) {
      let randomNumber: number = Math.floor(Math.random() * 7) + 1;
      solution.push(colors[randomNumber]);
    }
    return solution;

}