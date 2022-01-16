import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';
import { MathGameComponent } from './math-game/math-game.component';
import { GameMessageComponent } from './game-message/game-message.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';

const routes:Routes = [
  {
    path: 'game',
    component:NewGameComponent
  },
  {
    path: 'mathgame',
    component:MathGameComponent
  },
  {
    path: 'game-message/:score/:total',
    component: GameMessageComponent
  },
  {
    path: 'gameSettings',
    component: GameSettingsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { 

}
