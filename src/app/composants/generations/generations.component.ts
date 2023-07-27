import { Component } from '@angular/core';
import {Generation} from "../../modeles/Generation";
import {Pokemon} from "../../modeles/Pokemon";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})

export class GenerationsComponent {

  private _generations:Generation[];


  constructor() {
    this._generations = [];
    this._generations.push(new Generation("Generation I"));
    this._generations.push(new Generation("Generation II"));
    this._generations.push(new Generation("Generation III"));
    this._generations.push(new Generation("Generation IV"));
    this._generations.push(new Generation("Generation V"));
    this._generations.push(new Generation("Generation VI"));
    this._generations.push(new Generation("Generation VII"));
    this._generations.push(new Generation("Generation VIII"));
    this._generations.push(new Generation("Generation IX"));

  }


  get generations(): Generation[] {
    return this._generations;
  }

  set generations(value: Generation[]) {
    this._generations = value;
  }
}
