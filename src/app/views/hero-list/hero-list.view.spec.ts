import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListView } from './hero-list.view';

describe('HeroListView', () => {
  let component: HeroListView;
  let fixture: ComponentFixture<HeroListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroListView]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
