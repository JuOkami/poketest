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

    for (let i = 1; i <= 1010-0; i++) {
      this._pokemons.push(this.createPokemon(i));
    }

  }
  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  set pokemons(value: Pokemon[]) {
    this._pokemons = value;
  }

  public createPokemon(indice:number){
    let nouveauPokemon = new Pokemon("", indice, [], 0, 0, "image");
    fetch('https://pokeapi.co/api/v2/pokemon/'+indice)
      .then(reponse => reponse.json())
      .then(
        json => {
          nouveauPokemon.nom = this.miseEnForme(json.name);
          nouveauPokemon.taille = json.height/10;
          nouveauPokemon.poids = json.weight/10;
          nouveauPokemon.image = json['sprites']['other']['official-artwork']['front_default'];
          nouveauPokemon.type.push(this.miseEnForme(json.types[0].type.name));
          if (json.types[1]){
            nouveauPokemon.type.push(this.miseEnForme(json.types[1].type.name));
          }
        }
      )
    return nouveauPokemon;
  }

  public miseEnForme(texte:string){
    return texte.charAt(0).toUpperCase()+texte.slice(1);
  }

  getColorClass(p: Pokemon) {
    return "classeType"+p.type[0];
  }
}
