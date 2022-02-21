import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentdetailsComponent } from './addstudentdetails.component';

describe('AddstudentdetailsComponent', () => {
  let component: AddstudentdetailsComponent;
  let fixture: ComponentFixture<AddstudentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstudentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
