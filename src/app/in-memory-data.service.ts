import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', rank: 12, superpower: 'Niceness' },
      { id: 13, name: 'Bombasto', rank: 13, superpower: 'Explosions' },
      { id: 14, name: 'Celeritas', rank: 14, superpower: 'Superspeed' },
      { id: 15, name: 'Magneta', rank: 15, superpower: 'Metal control' },
      { id: 16, name: 'RubberMan', rank: 16, superpower: 'Elastic body' },
      { id: 17, name: 'Dynama', rank: 17, superpower: 'Energy generation' },
      { id: 18, name: 'Dr. IQ', rank: 18, superpower: 'Superintelligence' },
      { id: 19, name: 'Magma', rank: 19, superpower: 'Magma creation' },
      { id: 20, name: 'Tornado', rank: 20, superpower: 'Tornado creation' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
