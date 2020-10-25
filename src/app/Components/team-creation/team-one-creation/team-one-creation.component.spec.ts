import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOneCreationComponent } from './team-one-creation.component';

describe('TeamOneCreationComponent', () => {
  let component: TeamOneCreationComponent;
  let fixture: ComponentFixture<TeamOneCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamOneCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOneCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
