import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-editor',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './hero-editor.view.html',
  styleUrl: './hero-editor.view.scss',
})
export class HeroEditorView implements OnInit {
  public heroForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
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
      this.heroService.getHero(heroId).subscribe(hero => {
        this.heroForm.patchValue(hero)
      })
    }
  }

  onSubmit() {
    if (this.heroForm.valid) {
      // Process form submission here
      if (this.heroForm.controls['id'].value) {
        this.heroService.updateHero(this.heroForm.value).subscribe(() => {
          this.snackBar.open('Hero updated successfully','close');
          this.router.navigate(['/heroes'])
        })
      } else {
        this.heroService.addHero(this.heroForm.value).subscribe(() => {
          this.snackBar.open('Hero created successfully','close');
          this.router.navigate(['/heroes'])
        })
      }
    } else {
      // Mark all form fields as touched to display validation errors
      this.heroForm.markAllAsTouched();
    }
  }
}
