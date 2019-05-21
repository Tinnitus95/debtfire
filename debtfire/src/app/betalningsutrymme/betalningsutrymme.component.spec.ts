import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetalningsutrymmeComponent } from './betalningsutrymme.component';

describe('BetalningsutrymmeComponent', () => {
  let component: BetalningsutrymmeComponent;
  let fixture: ComponentFixture<BetalningsutrymmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetalningsutrymmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetalningsutrymmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
