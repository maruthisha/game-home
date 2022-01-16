import { Component, OnInit } from '@angular/core';
import { MathGameService } from '../services/math-game.service';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit {

  constructor(public mathGameService: MathGameService) 
  {
  }

  ngOnInit(): void {
  }


  resetValues()
  {
    this.mathGameService.gameSettings.maxQuestions = 5
    this.mathGameService.gameSettings.maxTime = 2
  }

}
