import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-page-a',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './page-a.page.html',
  styleUrls: ['./page-a.page.scss'],
})
export class PageAPage {
  pokemonName = '';
  pokemon: any;
  loading = false;
  error = false;

  constructor(private api: ApiService) {}

  searchPokemon() {
    if (!this.pokemonName) return;
    
    this.loading = true;
    this.error = false;
    this.pokemon = null;

    this.api.getPokemon(this.pokemonName).subscribe({
      next: (res: any) => { 
        this.pokemon = res; 
        this.loading = false; 
      },
      error: () => { 
        this.error = true; 
        this.loading = false; 
      }
    });
  }

  getPokemonTypes(): string {
    if (!this.pokemon) return '';
    return this.pokemon.types.map((t: any) => t.type.name).join(', ');
  }

  getPokemonAbilities(): string {
    if (!this.pokemon) return '';
    return this.pokemon.abilities.map((a: any) => a.ability.name).join(', ');
  }
}