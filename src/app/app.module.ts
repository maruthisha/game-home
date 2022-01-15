import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewGameComponent } from './new-game/new-game.component';
import { AppRoutingModule } from './app-routing.module';
import { MathGameComponent } from './math-game/math-game.component';
import { FormsModule } from '@angular/forms';
import { GameMessageComponent } from './game-message/game-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewGameComponent,
    MathGameComponent,
    GameMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
