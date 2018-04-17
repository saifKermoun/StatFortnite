import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPlayerOneComponent } from './comp-player-one.component';

describe('CompPlayerOneComponent', () => {
  let component: CompPlayerOneComponent;
  let fixture: ComponentFixture<CompPlayerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPlayerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPlayerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
