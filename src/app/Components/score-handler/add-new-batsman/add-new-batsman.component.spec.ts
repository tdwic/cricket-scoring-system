import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBatsmanComponent } from './add-new-batsman.component';

describe('AddNewBatsmanComponent', () => {
  let component: AddNewBatsmanComponent;
  let fixture: ComponentFixture<AddNewBatsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBatsmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBatsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
