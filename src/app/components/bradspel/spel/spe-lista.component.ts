import {Component,OnInit,Output} from "@angular/core";
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import firestore = firebase.firestore;
@Component({
  selector: 'app-spel-lista',
  template: `
    <div style="margin-left: 35px; margin-top: 5px;">
      <div  class="spel" *ngFor="let Spel of lista$ | async">

          <div class="card-header">
            <h4> {{Spel.namn}}</h4>
            <img src="{{ Spel.imgurl}}" class="card-img-top" alt="box art">
          </div>
          <div class="card-body">
            <p class="card-text">Antal spelare: {{ Spel.franspelare}} - {{Spel.tillspelare}}</p>
            <p class="card-text">Utgivare: {{ Spel.utgivare}}</p>
            <p class="card-text">Designer:  {{ Spel.designer}}</p>
          </div>
        </div>
      </div>
  `,

  styles: [`
    .card-header{
    display: block;}
    .card-body{display: block;}
    .spel {
      width: 14rem;
      height: 25rem;
      box-shadow: 0px 5px 19px 8px #422D17;
      background-color: rgba(241, 241, 236, 0.83);
      border-radius: 8px;
      box-shadow: 1px 8px 10px black;
      text-align: center;
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      margin-top: 5px;
      transition: all .2s;
      font: normal 16px calibri;
      padding: 6px;
      align-items: center;
    }

    .spel img {

      border-radius: 8px;
      border: solid 2px black;
      padding: 0%;
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: auto;
      max-width: 13rem;
      max-height: 200px;
    }
    .spel:hover {
      box-shadow: 2px 12px 15px black;
    }
  `],
})

export class SpelListaComponent implements OnInit {
  lista$ = collectionData(collection(this.firestore,'Spel')) as Observable<Spel[]>

  constructor(private readonly firestore:Firestore) {
  }

  ngOnInit() {
  }
}

export class Spel {
  constructor(
   public namn: string,
   public designer: string,
   public utgivare: string,
   public franspelare: number,
   public tillspelare: number,
   public imgurl: string,
   public beskrivning: string,
)
  {

  }

}




