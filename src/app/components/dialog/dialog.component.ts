import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule, MatDialogRef
} from '@angular/material/dialog';
import { Hero } from '../../hero';
import { MatButtonModule } from '@angular/material/button';
;


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Hero,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}