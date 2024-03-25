import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroEditorView } from './views/hero-editor/hero-editor.view';
import { HeroListView } from './views/hero-list/hero-list.view';

export const routes: Routes = [
    {
        path: 'create-hero',
        component: HeroEditorView
    },
    {
        path: 'heroes/:id',
        component: HeroEditorView
    },
    {
        path: 'heroes',
        component: HeroListView
    },
    {
        path: '**',
        redirectTo: 'heroes'
    }

];
