import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent {

  public titre:string;


  constructor() {
    this.titre = "Generation Pokémon";
  }
}
