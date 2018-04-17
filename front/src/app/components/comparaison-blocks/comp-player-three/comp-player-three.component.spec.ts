import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPlayerThreeComponent } from './comp-player-three.component';

describe('CompPlayerThreeComponent', () => {
  let component: CompPlayerThreeComponent;
  let fixture: ComponentFixture<CompPlayerThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPlayerThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPlayerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
