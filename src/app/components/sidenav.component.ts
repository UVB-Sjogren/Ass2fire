
import {Component} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {AppComponent} from "../app.component";

var app = new AppComponent()
@Component({
  selector: 'app-sidenav',
  template: `<div id="mySidenav" class="sidenav" (mouseleave)="closeNav()">
    <div *ngIf="authService.isLoggedIn; else elseBlock" >
      <a class="link" id="sidenavtop" *ngIf="authService.isLoggedIn" [routerLink]="['/landing/valkommen/']"><img src="../assets/svg/välkommen.svg"> </a>
      <a class="link" *ngIf="authService.isLoggedIn" [routerLink]="['bradspel']"><img src="../assets/svg/brädspel.svg" ></a>
      <a class="link" *ngIf="authService.isLoggedIn" [routerLink]="['/bradspel/add/']"><img src="../assets/svg/add.svg" ></a>
      <a class="link" [routerLink]="['/landing/kontakta/']"><img src="../assets/svg/kontakt.svg"> </a>
      <a class="link" (click)="authService.SignOut()"><img src="../assets/svg/loggaut.svg" ></a>
    </div>
    <ng-template #elseBlock>
      <a class="link"  [routerLink]="['/sign-in/']"><img src="../assets/svg/logga in.svg" ></a>
    </ng-template>
  </div>
  `,
  styles:[],
})

export class SidenavComponent {
  constructor(public authService: AuthService) {
  }
  closeNav(): void {
    let mysidenav = document.getElementById('mySidenav');
    let main = document.getElementById('main');
    let pil = document.getElementById('pil');
    // @ts-ignore
    mysidenav.style.width = '0';
    // @ts-ignore
    main.style.marginLeft = "0";
    // @ts-ignore
    pil.style.display = "block";

  }

}
