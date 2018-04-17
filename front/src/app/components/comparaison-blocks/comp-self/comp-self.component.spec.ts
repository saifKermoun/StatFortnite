import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSelfComponent } from './comp-self.component';

describe('CompSelfComponent', () => {
  let component: CompSelfComponent;
  let fixture: ComponentFixture<CompSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
