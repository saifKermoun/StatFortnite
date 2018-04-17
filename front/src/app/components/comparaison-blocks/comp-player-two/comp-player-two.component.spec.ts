import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPlayerTwoComponent } from './comp-player-two.component';

describe('CompPlayerTwoComponent', () => {
  let component: CompPlayerTwoComponent;
  let fixture: ComponentFixture<CompPlayerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPlayerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPlayerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
