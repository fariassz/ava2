import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  //vc digita um nome existente de um pokemon e api acha ele
  getPokemon(pokemonName: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
  }

}