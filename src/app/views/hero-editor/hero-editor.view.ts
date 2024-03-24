import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-editor',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './hero-editor.view.html',
  styleUrl: './hero-editor.view.scss',
})
export class HeroEditorComponent implements OnInit {
  public heroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      superpower: ['', Validators.required],
      rank: ['', Validators.required],
      cape: '',
    });
  }

  onSubmit() {
    if (this.heroForm.valid) {
      // Process form submission here
      console.log(this.heroForm.value);
    } else {
      // Mark all form fields as touched to display validation errors
      this.heroForm.markAllAsTouched();
    }
  }
}
