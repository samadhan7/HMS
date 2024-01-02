import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuardDialogComponentComponent } from './update-guard-dialog-component.component';

describe('UpdateGuardDialogComponentComponent', () => {
  let component: UpdateGuardDialogComponentComponent;
  let fixture: ComponentFixture<UpdateGuardDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateGuardDialogComponentComponent]
    });
    fixture = TestBed.createComponent(UpdateGuardDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
