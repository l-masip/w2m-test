import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroListView } from './views/hero-list/hero-list.view';
import { LoaderService } from './services/loader.service';
import { HeroEditorView } from './views/hero-editor/hero-editor.view';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroListView, HeroEditorView, LoaderComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hero List';

  constructor(public loaderService: LoaderService){}
}
