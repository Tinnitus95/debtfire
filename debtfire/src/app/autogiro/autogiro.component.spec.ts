import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutogiroComponent } from './autogiro.component';

describe('AutogiroComponent', () => {
  let component: AutogiroComponent;
  let fixture: ComponentFixture<AutogiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutogiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutogiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
