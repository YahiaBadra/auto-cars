import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownlistComponent } from './breakdownlist.component';

describe('BreakdownlistComponent', () => {
  let component: BreakdownlistComponent;
  let fixture: ComponentFixture<BreakdownlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakdownlistComponent]
    });
    fixture = TestBed.createComponent(BreakdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
