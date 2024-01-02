import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityguardsComponent } from './securityguards.component';

describe('SecurityguardsComponent', () => {
  let component: SecurityguardsComponent;
  let fixture: ComponentFixture<SecurityguardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityguardsComponent]
    });
    fixture = TestBed.createComponent(SecurityguardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
