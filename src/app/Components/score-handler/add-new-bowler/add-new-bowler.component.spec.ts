import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBowlerComponent } from './add-new-bowler.component';

describe('AddNewBowlerComponent', () => {
  let component: AddNewBowlerComponent;
  let fixture: ComponentFixture<AddNewBowlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBowlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBowlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
