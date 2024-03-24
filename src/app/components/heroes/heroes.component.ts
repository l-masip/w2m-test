import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';
import { CommonModule, UpperCasePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  @Input() hero!: Hero;
}
