import { Component, Inject, OnInit, HostListener  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../store/favorite.state';
interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.css']
})

export class PokemonDialogComponent implements OnInit {
  selectedPokemonDetails: any;
  pieChartData: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private store: Store<AppState>, public dialog: MatDialog) {this.selectedPokemonDetails = data.pokemon;}

    
  ngOnInit() {
      this.mapPokemonStatsToChartData();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  handleImgError(event: Event, defaultImgUrl: string) {
    (event.target as HTMLImageElement).src = defaultImgUrl;
  }
  mapPokemonStatsToChartData() {
    this.pieChartData = this.selectedPokemonDetails.stats.map((stat: Stat) => {
      return {
        name: stat.stat.name,
        value: stat.base_stat
      };
    });
  }

}
