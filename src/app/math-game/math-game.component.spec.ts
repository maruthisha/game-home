import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathGameComponent } from './math-game.component';

describe('MathGameComponent', () => {
  let component: MathGameComponent;
  let fixture: ComponentFixture<MathGameComponent>;
  let maxQuestions: number = 25;
  let currentQuestion: number = 0;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
