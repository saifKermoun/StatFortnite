import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatsUserComponent } from './total-stats-user.component';

describe('TotalStatsUserComponent', () => {
  let component: TotalStatsUserComponent;
  let fixture: ComponentFixture<TotalStatsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalStatsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
