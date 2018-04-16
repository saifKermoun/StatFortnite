import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaisonStatsComponent } from './comparaison-stats.component';

describe('ComparaisonStatsComponent', () => {
  let component: ComparaisonStatsComponent;
  let fixture: ComponentFixture<ComparaisonStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaisonStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaisonStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
