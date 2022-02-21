import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqldataComponent } from './sqldata.component';

describe('SqldataComponent', () => {
  let component: SqldataComponent;
  let fixture: ComponentFixture<SqldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqldataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
