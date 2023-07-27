import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonCountLetterComponent } from './pokemon-count-letter/pokemon-count-letter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { favouritePokemonReducer } from './store/favorite.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonCountLetterComponent,
    PokemonDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ favouritePokemon: favouritePokemonReducer }),
    MatDialogModule,
    NgxChartsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
