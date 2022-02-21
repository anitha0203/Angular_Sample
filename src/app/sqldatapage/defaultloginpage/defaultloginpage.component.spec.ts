import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultloginpageComponent } from './defaultloginpage.component';

describe('DefaultloginpageComponent', () => {
  let component: DefaultloginpageComponent;
  let fixture: ComponentFixture<DefaultloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultloginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
