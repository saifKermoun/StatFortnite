import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsWeekComponent } from './stats-week.component';

describe('StatsWeekComponent', () => {
  let component: StatsWeekComponent;
  let fixture: ComponentFixture<StatsWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
