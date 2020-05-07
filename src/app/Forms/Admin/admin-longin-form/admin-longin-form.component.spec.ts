import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLonginFormComponent } from './admin-longin-form.component';

describe('AdminLonginFormComponent', () => {
  let component: AdminLonginFormComponent;
  let fixture: ComponentFixture<AdminLonginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLonginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLonginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
