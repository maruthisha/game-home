import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MathGameService } from '../services/math-game.service';

@Component({
  selector: 'app-game-message',
  templateUrl: './game-message.component.html',
  styleUrls: ['./game-message.component.css']
})
export class GameMessageComponent implements OnInit {

  score: string = "0"
  total: string = "0"

  constructor(private router: Router, private route: ActivatedRoute, mathService: MathGameService) { }


  ngOnInit(): void {
    this.score = this.route.snapshot.paramMap.get('score') ?? "0"
    this.total = this.route.snapshot.paramMap.get('total') ?? "0"
    console.log(`score ${this.score} and total ${this.total}`)
  }

}
