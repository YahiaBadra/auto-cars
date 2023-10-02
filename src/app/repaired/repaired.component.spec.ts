import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairedComponent } from './repaired.component';

describe('RepairedComponent', () => {
  let component: RepairedComponent;
  let fixture: ComponentFixture<RepairedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairedComponent]
    });
    fixture = TestBed.createComponent(RepairedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
