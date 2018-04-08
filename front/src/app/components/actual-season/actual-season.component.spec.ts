import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualSeasonComponent } from './actual-season.component';

describe('ActualSeasonComponent', () => {
  let component: ActualSeasonComponent;
  let fixture: ComponentFixture<ActualSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
