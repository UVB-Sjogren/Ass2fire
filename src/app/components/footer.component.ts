import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="nederkant"><marquee behavior="alternate" scrollamount = "5"><code id="pil"><-- Meny</code></marquee></div>`,
  styles: [``],

})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
