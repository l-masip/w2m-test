import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroListView } from './views/hero-list/hero-list.view';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroListView, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba-tecnica-heroes';

  constructor(public loaderService: LoaderService){}
}
