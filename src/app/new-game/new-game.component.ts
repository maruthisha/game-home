import { Component, OnInit } from '@angular/core';
import { IGameInfo } from './IGameInfo';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  games: IGameInfo[] = [];
  filteredGames: IGameInfo[] = [];
  //filterBy: string = "Math";
  private _filter: string = "Math";

  constructor() { }

  get filterBy()
  {
    return this._filter;
  }

  set filterBy(value: string)
  {
    console.log(value)
    this._filter = value;
    this.filteredGames = this.games.filter((game: IGameInfo) => game.Enabled && game.Name.toLowerCase().includes(value.toLowerCase()))
  }


  ngOnInit(): void {
    this.games = [
      {
        Name:'Math',
        RouterLink:'/mathgame',
        Enabled: true,
        Description: 'Math based game'
      },
      {
        Name:'Scramble',
        RouterLink:'/mathgame',
        Enabled: true,
        Description: 'Word scramble game'
      },
      {
        Name:'That',
        RouterLink:'/mathgame',
        Enabled: true,
        Description: 'That based game'
      },
      {
        Name:'this',
        RouterLink:'/mathgame',
        Enabled: true,
        Description: 'This based game'
      },
      {
        Name:'Dumb',
        RouterLink:'/mathgame',
        Enabled: true,
        Description: 'Dumb based game'
      }
    ]

    this.filteredGames = this.games.filter((game: IGameInfo) => game.Enabled)
  }

}
