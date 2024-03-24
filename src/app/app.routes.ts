import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';

export const routes: Routes = [
    {
        path: 'heroes/:name',
        component: HeroesComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];
