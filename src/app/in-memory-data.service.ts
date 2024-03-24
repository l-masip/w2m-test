import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', rank: 12  },
      { id: 13, name: 'Bombasto', rank: 13  },
      { id: 14, name: 'Celeritas', rank: 14  },
      { id: 15, name: 'Magneta', rank: 15  },
      { id: 16, name: 'RubberMan', rank: 16  },
      { id: 17, name: 'Dynama', rank: 17  },
      { id: 18, name: 'Dr. IQ', rank: 18  },
      { id: 19, name: 'Magma', rank: 19  },
      { id: 20, name: 'Tornado', rank: 20  }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.rank)) + 1 : 11;
  }
}
