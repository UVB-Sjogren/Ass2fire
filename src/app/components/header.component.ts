import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-header',
  template: `<header class="överskrift" class="överskrift">
    <div class=userCard style="height:30%" *ngIf="authService.userData as user">
      <div>
        <img  src="{{(user.photoURL) ? user.photoURL : '/assets/dummy-user.png'}}"
             alt="{{user.displayName}}">
          <p>inloggad som: <strong>{{(user.displayName) ? user.displayName : 'User'}}</strong></p>

      </div>
    </div>
    <img id="vshemsida" src="assets/svg/masthead.svg" >
  </header>
  `,
  styles: [`#vshemsida{
    width:45%;
  }
  .överskrift {
    top: 0;
    height: 120px;
    width: 100%;
    position: fixed;
    display: block;
    margin-left: auto;
    border-radius: 30px;
    border-color: black;
    background-color: chocolate;
    box-shadow: 0 5px 5px chocolate;
    text-align: center;
  }
  .överskrift img{
    height: 90%;
    width:50%;
  }
  /*=====  Överskriftsraden längst upp  =====*/
  .överskrift h1 {
    font-family:sans-serif;
    font-size: 45px;
  }`]
})

export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }

}
