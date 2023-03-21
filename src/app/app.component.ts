import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  title = 'Ass2fire';
  constructor(){}
  openNav() {
    let mysidenav = document.getElementById('mySidenav');
    let main = document.getElementById('main');
    let pil = document.getElementById('pil');
    // @ts-ignore
    mySidenav.style.width = '150px';
    // @ts-ignore
    main.style.marginLeft = "90px";
    // @ts-ignore
    pil.style.display = "none";
  }
  closeNav(): void {
    let mysidenav = document.getElementById('mysidenav');
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

