import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemppageComponent } from './addemppage.component';

describe('AddemppageComponent', () => {
  let component: AddemppageComponent;
  let fixture: ComponentFixture<AddemppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemppageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
