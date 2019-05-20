import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtsummaryComponent } from './debtsummary.component';

describe('DebtsummaryComponent', () => {
  let component: DebtsummaryComponent;
  let fixture: ComponentFixture<DebtsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
