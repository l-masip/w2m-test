import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './hero-editor.view.html',
  styleUrl: './hero-editor.view.scss',
})
export class HeroEditorView implements OnInit {
  public heroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      superpower: ['', Validators.required],
      rank: ['', Validators.required],
    });

    const heroId = this.activatedRoute.snapshot.params['id'] ?? null;
    if (heroId) {
      this.heroService.getHero(heroId).subscribe((hero) => {
        this.heroForm.patchValue(hero);
      });
    }
  }

  onSubmit() {
    if (this.heroForm.valid) {
      // Process form submission here
      if (this.heroForm.controls['id'].value) {
        this.heroService.updateHero(this.heroForm.value).subscribe(() => {
          this.snackBar.open('Hero updated successfully', 'Close');
          this.router.navigate(['/heroes']);
        });
      } else {
        this.heroService.addHero(this.heroForm.value).subscribe(() => {
          this.snackBar.open('Hero created successfully', 'Close');
          this.router.navigate(['/heroes']);
        });
      }
    } else {
      // Mark all form fields as touched to display validation errors
      this.heroForm.markAllAsTouched();
    }
  }
}
