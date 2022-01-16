import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MathGameService } from '../services/math-game.service';

@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.css'],
  //providers:[MathGameService]
})
export class MathGameComponent implements OnInit {

  firstFactor: number = 0;
  secondFactor: number = 0;
  sign: string = "+";
  question: string = "";
  firstOption: number = 0;
  secondOption: number = 0;
  thirdOption: number = 0;
  fourthOption: number = 0;
  right: number = 0;
  wrong: number = 0;
  answer: number = 0;
  options: number[] = [];
  maxQuestions: number;
  currentQuestion: number = 0;

  constructor(private mathService: MathGameService,
              private router: Router) { 
    this.constructQuestion();
    this.maxQuestions = mathService.gameSettings.maxQuestions;
    console.log(this.maxQuestions);
  }

  constructQuestion()
  {
    this.currentQuestion++;
    if (this.currentQuestion > this.maxQuestions)
    {

      console.log("Game Over")
     

      this.router.navigate(['/game-message', this.right, this.maxQuestions])

      this.currentQuestion = 0;
      this.wrong = 0;
      this.right = 0;
      
      return;
    }
    this.firstFactor = this.mathService.getFactor(10);
    this.secondFactor = this.mathService.getFactor(10);
    this.sign = this.mathService.getRandomSign();

    this.options = this.mathService.getOptions(this.firstFactor, this.secondFactor, this.sign);


    this.firstOption = this.options[0];
    this.secondOption = this.options[1];
    this.thirdOption = this.options[2];
    this.fourthOption = this.options[3];
    this.answer = this.mathService.getAnswer(this.firstFactor, this.secondFactor, this.sign);

    this.question = `${this.firstFactor} ${this.sign} ${this.secondFactor}`
  }

  processAnswer(option: number)
  {
    console.log(option);
    if (this.answer == option)
    {
      this.right++;
    }
    else
    {
      this.wrong++;
    }
    this.constructQuestion();
  }

  ngOnInit(): void {
  }

}
