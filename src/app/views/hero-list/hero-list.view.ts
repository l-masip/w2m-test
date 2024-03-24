import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  take,
} from 'rxjs/operators';
import { HeroesComponent } from '../../components/heroes/heroes.component';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [
    HeroesComponent,
    CommonModule,
    HttpClientInMemoryWebApiModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './hero-list.view.html',
  styleUrl: './hero-list.view.scss',
})
export class HeroListView implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new BehaviorSubject<string>('');

  constructor(private heroService: HeroService) {}

  public trackHero(index: number, hero: Hero): number {
    return hero.id;
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
