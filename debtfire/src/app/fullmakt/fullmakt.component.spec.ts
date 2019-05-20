import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullmaktComponent } from './fullmakt.component';

describe('FullmaktComponent', () => {
  let component: FullmaktComponent;
  let fixture: ComponentFixture<FullmaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullmaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
