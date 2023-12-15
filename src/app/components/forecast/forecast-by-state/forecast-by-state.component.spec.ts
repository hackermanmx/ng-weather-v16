import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastByStateComponent } from './forecast-by-state.component';

describe('StateForecastComponent', () => {
  let component: ForecastByStateComponent;
  let fixture: ComponentFixture<ForecastByStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ForecastByStateComponent],
    });
    fixture = TestBed.createComponent(ForecastByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
