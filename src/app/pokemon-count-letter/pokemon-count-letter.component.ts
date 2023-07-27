import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-count-letter',
  templateUrl: './pokemon-count-letter.component.html',
  styleUrls: ['./pokemon-count-letter.component.css']
})
export class PokemonCountLetterComponent implements OnInit {


  pokemonCounts: { [key: string]: number } = {};

  constructor(private http: HttpClient){ }
  ngOnInit() {
    this.countPokemonByFirstLetter();
  }

  countPokemonByFirstLetter() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281`).subscribe((data: any) => {
      let pokemonNames = data.results.map((pokemon: any) => pokemon.name);
      this.pokemonCounts = this.countFirstLetter(pokemonNames);
    });
  }
  countFirstLetter(pokemonNames: string[]): { [key: string]: number } {
    let counts: { [key: string]: number } = {};
    for (let name of pokemonNames) {
      const firstLetter = name.charAt(0);
      if (counts[firstLetter] === undefined) {
        counts[firstLetter] = 1;
      } else {
        counts[firstLetter]++;
      }
    }
    return counts;
  }
  
  
}
