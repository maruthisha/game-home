import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MathGameService } from '../services/math-game.service';
import { IGameInformation } from './IGameInformation';
import { IQuestion } from './IQuestion';
import { QuestionOutcomes } from './QuestionOutcomes';

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
  gameInfo: IGameInformation;
  questions: IQuestion[] = []
  startTime: Date = new Date()
  endTime: Date = new Date()

  constructor(private mathService: MathGameService,
              private router: Router) { 
    this.constructQuestion();
    this.maxQuestions = mathService.gameSettings.maxQuestions;
    console.log(this.maxQuestions);

    this.gameInfo = {
      totalQuestions : this.maxQuestions,
      questions : this.questions,
      score : this.right,
      wrong : this.wrong
    }
  }

  constructQuestion()
  {
    this.currentQuestion++;
    if (this.currentQuestion > this.maxQuestions)
    {

      console.log("Game Over")
     
      this.gameInfo = {
        totalQuestions : this.maxQuestions,
        questions : this.questions,
        score : this.right,
        wrong : this.wrong
      }

      for (let quest of this.gameInfo.questions)
      {
        console.log(`${quest.question} - ${quest.answer} - ${quest.result} - ${quest.duration}`)
      }

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
    this.startTime = new Date()

    
  }

  processAnswer(option: number)
  {
    console.log(option);
    var right : boolean = false
    if (this.answer == option)
    {
      this.right++;
      right = true;
    }
    else
    {
      this.wrong++;
    }

    this.endTime = new Date()

    this.questions.push({
      question : this.question,
      options : this.options,
      answer : this.answer,
      duration : (this.endTime.getTime() - this.startTime.getTime()) / 1000,
      result : right ? QuestionOutcomes.Right : QuestionOutcomes.Wrong,
      actualAnswer : option
    })

    
    this.constructQuestion();
  }

  ngOnInit(): void {
  }

}
