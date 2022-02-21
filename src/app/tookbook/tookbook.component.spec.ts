import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TookbookComponent } from './tookbook.component';

describe('TookbookComponent', () => {
  let component: TookbookComponent;
  let fixture: ComponentFixture<TookbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TookbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
