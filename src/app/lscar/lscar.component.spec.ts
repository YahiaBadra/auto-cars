import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LscarComponent } from './lscar.component';

describe('LscarComponent', () => {
  let component: LscarComponent;
  let fixture: ComponentFixture<LscarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LscarComponent]
    });
    fixture = TestBed.createComponent(LscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
