import { Injectable } from '@angular/core';
import { IMathGameSettings } from './IMath-game-settings';

@Injectable()
export class MathGameService {

  constructor() { }

  signs: string[] = ["+", "+","X","X"]
  gameSettings: IMathGameSettings = {maxQuestions : 5, maxTime : 2, allowedOperations:["+", "+","X","X"]};
  public entityName = "Math Game Service"
  public randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  public getRandomSign(): string
  {
    var option = this.randomIntFromInterval(0,3)
    return this.signs[option]
  }

  public getFactor(max: number)
  {
    return this.randomIntFromInterval(1, max);
  }

  public getAnswer(firstFactor: number, secondFactor: number, sign: string): number
  {
    var answer: number = 0;

    switch(sign)
    {
      case "+":
        answer = firstFactor + secondFactor;
        break;
      case "X":
        answer = firstFactor * secondFactor;
        break;
    }

    return answer;
  }

  public getOptions(firstFactor: number, secondFactor: number, sign: string): number[]
  {
    var answer: number = 0;

    switch(sign)
    {
      case "+":
        answer = firstFactor + secondFactor;
        break;
      case "X":
        answer = firstFactor * secondFactor;
        break;
    }

    var options = [
      this.randomIntFromInterval(Math.max(firstFactor, secondFactor), Math.max(firstFactor, secondFactor) + 100),
      this.randomIntFromInterval(Math.max(firstFactor, secondFactor), Math.max(firstFactor, secondFactor) + 100),
      this.randomIntFromInterval(Math.max(firstFactor, secondFactor), Math.max(firstFactor, secondFactor) + 100),
      this.randomIntFromInterval(Math.max(firstFactor, secondFactor), Math.max(firstFactor, secondFactor) + 100)
    ];

    var answerPosition = this.randomIntFromInterval(0 , 3);
    options[answerPosition] = answer;

    return options;

  }
}
