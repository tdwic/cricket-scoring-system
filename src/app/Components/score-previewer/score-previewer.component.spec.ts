import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePreviewerComponent } from './score-previewer.component';

describe('ScorePreviewerComponent', () => {
  let component: ScorePreviewerComponent;
  let fixture: ComponentFixture<ScorePreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorePreviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
