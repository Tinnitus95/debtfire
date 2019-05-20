import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtSelectionComponent } from './debt-selection.component';

describe('DebtSelectionComponent', () => {
  let component: DebtSelectionComponent;
  let fixture: ComponentFixture<DebtSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
