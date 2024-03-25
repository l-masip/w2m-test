import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  skip,
  startWith,
  switchMap,
  take,
  tap,
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
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    ReactiveFormsModule,
  ],
  templateUrl: './hero-list.view.html',
  styleUrl: './hero-list.view.scss',
})
export class HeroListView implements OnInit, AfterViewInit {
  heroes$!: Observable<Hero[]>;

  public searchFormControl = this.fb.control<string>('');

  private searchText$ = new BehaviorSubject('');

  constructor(
    private heroService: HeroService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  public trackHero(index: number, hero: Hero): number {
    return hero.id;
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges
      .pipe(
        map((v) => v ?? ''),
        debounceTime(300),
        distinctUntilChanged(),
        tap((v) => this.searchText$.next(v))
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.heroes$ = this.searchText$.pipe(
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

  onEdit(hero: Hero): void {
    this.router.navigate(['/heroes', hero.id]);
  }

  onDelete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      // Force refresh hero list
      this.snackBar.open('Hero deleted successfully','Close');
      this.searchText$.next(this.searchText$.value);
    });
  }

  onCreate(): void {
    this.router.navigate(['/create-hero']);
  }
}
