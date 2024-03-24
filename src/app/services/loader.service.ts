import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private countLoaders = 0;

  readonly isLoading$ = new BehaviorSubject(false);

  increase(): void {
    this.countLoaders++;
    this.isLoading$.next(this.countLoaders > 0);
  }

  decrease(): void {
    this.countLoaders--
    this.isLoading$.next(this.countLoaders > 0);
  }
}
