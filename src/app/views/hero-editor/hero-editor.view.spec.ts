import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEditorView } from './hero-editor.view';

describe('HeroEditorView', () => {
  let component: HeroEditorView;
  let fixture: ComponentFixture<HeroEditorView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroEditorView]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroEditorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
