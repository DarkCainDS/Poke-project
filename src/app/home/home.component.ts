import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { setFavouritePokemon } from '../store/favorite.actions';
import { AppState } from '../store/favorite.state';
import { clearFavouritePokemon } from '../store/favorite.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  pokemonCounts: { [key: string]: number } = {};
  allPokemonData: any[] = [];
  pokemonData: any[] = [];
  totalPokemon: number = 0;
  page: number = 1; 
  limit: number = 20; 
  myControl = new FormControl();
  options: string[] = []; 
  filteredOptions: Observable<string[]> = of([]);
  selectedPokemonDetails: any;

  

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  ngOnInit() {
    this.loadAllPokemonNames();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          this.searchPokemon(); 
          return this._filter(value);
        })
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  loadAllPokemonNames() {
    const totalPages = 65;

    let observables: Observable<any>[] = [];
    for (let i = 0; i < totalPages; i++) {
      observables.push(this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${i * this.limit}&limit=${this.limit}`));
    }

    forkJoin(observables)
      .subscribe((data: any[]) => {
        this.allPokemonData = [].concat(...data.map(d => d.results));
        this.totalPokemon = this.allPokemonData.length;
        this.options = this.allPokemonData.map(pokemon => pokemon.name); // Agrega esta línea

        // Hacer el conteo para cada Pokémon
        for (let pokemon of this.allPokemonData) {
          const firstLetter = pokemon.name.charAt(0);
          if (this.pokemonCounts[firstLetter] === undefined) {
            this.pokemonCounts[firstLetter] = 1;
          } else {
            this.pokemonCounts[firstLetter]++;
          }
        }

        // Cargar los Pokémon para la primera página
        this.loadPokemonNames(1);
      });
  }

  getPokemonDetails(name: string) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`).subscribe(data => {
      this.selectedPokemonDetails = data;
      
    });
  }

  loadPokemonNames(page: number) {
    this.pokemonData = this.allPokemonData.slice((page - 1) * this.limit, page * this.limit);
  }



  nextPage() {
    if (this.page * this.limit < this.totalPokemon) {
      this.page++;
      this.loadPokemonNames(this.page);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.loadPokemonNames(this.page);
    }
  }

  // función para buscar Pokémon
  searchPokemon() {
this.page = 1;
if (this.myControl.value && this.myControl.value.length > 2) {
  this.pokemonData = this.allPokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(this.myControl.value.toLowerCase())
  );
} else if (!this.myControl.value || this.myControl.value === '') {
  this.loadPokemonNames(this.page);
}
  }
  setAsFavourite() {
    this.store.dispatch(setFavouritePokemon({ pokemon: this.selectedPokemonDetails }));
  }
  clearFavourite() {
    this.store.dispatch(clearFavouritePokemon());
  }handleImgError(event: Event, defaultImgUrl: string) {
    (event.target as HTMLImageElement).src = defaultImgUrl;
  }
  
  
  
  


}






