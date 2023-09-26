import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBreakdownComponent } from './car-breakdown.component';

describe('CarBreakdownComponent', () => {
  let component: CarBreakdownComponent;
  let fixture: ComponentFixture<CarBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarBreakdownComponent]
    });
    fixture = TestBed.createComponent(CarBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
