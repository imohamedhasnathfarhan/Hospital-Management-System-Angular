import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthMeterComponent } from './password-strength-meter.component';

describe('PasswordStrengthMeterComponent', () => {
  let component: PasswordStrengthMeterComponent;
  let fixture: ComponentFixture<PasswordStrengthMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrengthMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
