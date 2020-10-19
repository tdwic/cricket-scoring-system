import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreHandlerComponent } from './score-handler.component';

describe('ScoreHandlerComponent', () => {
  let component: ScoreHandlerComponent;
  let fixture: ComponentFixture<ScoreHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
