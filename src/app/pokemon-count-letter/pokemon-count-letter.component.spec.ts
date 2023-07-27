import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCountLetterComponent } from './pokemon-count-letter.component';

describe('PokemonCountLetterComponent', () => {
  let component: PokemonCountLetterComponent;
  let fixture: ComponentFixture<PokemonCountLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCountLetterComponent]
    });
    fixture = TestBed.createComponent(PokemonCountLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
