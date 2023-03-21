import { Component } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-valkommen',
  template: `
    <div class="mid">
      <h2>Välkommen till min hemsida</h2>
      <p>Denna sida är tillägnad brädspel, en värdefull hobby som alla kan
        engagera sig i och som för många handlar om både spelande och samlande.</p>
      <p>I denna webapp kan du registrera brädspel och sedan se alla registrerade spel med grundläggande information.</p>

      <img  src="https://storage.googleapis.com/ik163-1b3aa.appspot.com/Shelves"><br>
      <div class="piclink"><a href="https://en.wikipedia.org/wiki/Board_game">För mer information om det
        som saknas</a>
      </div>
    </div>
  `,
  styles:[`.main {
    padding-top: 120px;
    transition: margin-left .5s;
    padding-left: 15px;
    padding-bottom: 5%;
    background-color: burlywood;
    display: block;
  }

  `]
})
export class ValkommenComponent {
constructor(public authService: AuthService) {
}
}
