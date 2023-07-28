export class Pokemon{

  private _nom:string;
  private _numero:number;
  private _type:string[];
  private _taille:number;
  private _poids:number;
  private _image:string;


  constructor(nom: string, numero: number, type: string[], taille: number, poids: number, image: string) {
    this._nom = nom;
    this._numero = numero;
    this._type = type;
    this._taille = taille;
    this._poids = poids;
    this._image = image;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get type(): string[] {
    return this._type;
  }

  set type(value: string[]) {
    this._type = value;
  }

  get taille(): number {
    return this._taille;
  }

  set taille(value: number) {
    this._taille = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }


}
