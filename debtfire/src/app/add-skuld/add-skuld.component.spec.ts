import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkuldComponent } from './add-skuld.component';

describe('AddSkuldComponent', () => {
  let component: AddSkuldComponent;
  let fixture: ComponentFixture<AddSkuldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkuldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkuldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
