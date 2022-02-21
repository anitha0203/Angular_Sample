import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Database1Component } from './database1.component';

describe('Database1Component', () => {
  let component: Database1Component;
  let fixture: ComponentFixture<Database1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Database1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Database1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
