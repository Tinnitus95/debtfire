import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeringComponent } from './summering.component';

describe('SummeringComponent', () => {
  let component: SummeringComponent;
  let fixture: ComponentFixture<SummeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
