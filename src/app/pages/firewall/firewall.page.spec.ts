import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirewallPage } from './firewall.page';

describe('FirewallPage', () => {
  let component: FirewallPage;
  let fixture: ComponentFixture<FirewallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FirewallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
