import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Hero } from '../../hero';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    TitleCasePipe,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    DialogComponent,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  @Input() hero!: Hero;

  @Output() onEdit = new EventEmitter<Hero>();
  @Output() onDelete = new EventEmitter<Hero>();

  constructor(private dialog: MatDialog) {}

  deleteHero(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: this.hero.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDelete.next(this.hero);
      }
    });
  }

  editHero(): void {
    this.onEdit.next(this.hero);
  }
}
