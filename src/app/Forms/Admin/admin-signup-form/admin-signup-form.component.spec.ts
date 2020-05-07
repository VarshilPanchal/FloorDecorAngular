import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignupFormComponent } from './admin-signup-form.component';

describe('AdminSignupFormComponent', () => {
  let component: AdminSignupFormComponent;
  let fixture: ComponentFixture<AdminSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
