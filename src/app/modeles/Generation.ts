import {Pokemon} from "./Pokemon";

export class Generation {
  private _nom:string;


  constructor(nom: string) {
    this._nom = nom;
  }


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

}
