import { Component, OnInit,Output,Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {SpelListaComponent,Spel} from "./spe-lista.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-spel-beskrivning',
  template: `Tsdsfsdfsdf
    <div *ngIf="spel">
      <p>{{spel.beskrivning}}</p>
    </div>
    `,
  styles: []
})

export class SpelBeskrivningComponent implements OnInit{

  spel:Spel|undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the Spel namn from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const spelNamnFromRoute = String(routeParams.get('SpelNamn'));

    // Find the product that correspond with the id provided in route.
    // @ts-ignore
    this.spel = SpelListaComponent.lista$.find((Spel: { namn: string; }) => Spel.namn === spelNamnFromRoute);
  }

}
