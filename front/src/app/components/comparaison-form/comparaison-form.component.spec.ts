import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaisonFormComponent } from './comparaison-form.component';

describe('ComparaisonFormComponent', () => {
  let component: ComparaisonFormComponent;
  let fixture: ComponentFixture<ComparaisonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaisonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaisonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
