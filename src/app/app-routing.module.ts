import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonsComponent} from "./composants/pokemons/pokemons.component";
import {GenerationsComponent} from "./composants/generations/generations.component";

const routes: Routes = [
  {path: 'generations', component: GenerationsComponent},
  {path:'pokemons', component: PokemonsComponent},
  {path:'**', component: PokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
