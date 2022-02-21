import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqldatapageComponent } from './sqldatapage.component';

describe('SqldatapageComponent', () => {
  let component: SqldatapageComponent;
  let fixture: ComponentFixture<SqldatapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqldatapageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqldatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
