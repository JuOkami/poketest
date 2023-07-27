import { Component } from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {

private _pokemons : Pokemon[];

  constructor() {
    this._pokemons = [];
    this._pokemons.push(new Pokemon("Bulbizarre", "Graine", ["Plante", "Poison"], 0.7, 6.9));
    this._pokemons.push(new Pokemon("Herbizarre", "Graine", ["Plante", "Poison"], 1, 13));
    this._pokemons.push(new Pokemon("Florizarre", "Graine", ["Plante", "Poison"], 2, 100));
    this._pokemons.push(new Pokemon("Salamèche", "Lézard", ["Feu"], 0.6, 8.5));
    this._pokemons.push(new Pokemon("Reptincel", "Flamme", ["Feu"], 1.1, 19));
    this._pokemons.push(new Pokemon("Dracaufeu", "Flamme", ["Feu", "Vol"], 1.7, 90.5));

  }
  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  set pokemons(value: Pokemon[]) {
    this._pokemons = value;
  }


}
