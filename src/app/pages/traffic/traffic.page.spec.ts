import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrafficPage } from './traffic.page';

describe('TrafficPage', () => {
  let component: TrafficPage;
  let fixture: ComponentFixture<TrafficPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrafficPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
