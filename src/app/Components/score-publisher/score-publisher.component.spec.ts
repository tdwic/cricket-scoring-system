import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePublisherComponent } from './score-publisher.component';

describe('ScorePublisherComponent', () => {
  let component: ScorePublisherComponent;
  let fixture: ComponentFixture<ScorePublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorePublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
