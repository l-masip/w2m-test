import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  @Input() hero!: Hero;
}
