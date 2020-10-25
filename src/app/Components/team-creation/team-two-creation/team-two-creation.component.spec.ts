import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTwoCreationComponent } from './team-two-creation.component';

describe('TeamTwoCreationComponent', () => {
  let component: TeamTwoCreationComponent;
  let fixture: ComponentFixture<TeamTwoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTwoCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTwoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
