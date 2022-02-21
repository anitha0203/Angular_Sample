import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signuppage1Component } from './signuppage1.component';

describe('Signuppage1Component', () => {
  let component: Signuppage1Component;
  let fixture: ComponentFixture<Signuppage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signuppage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Signuppage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
