import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAssignmentComponent } from './services-assignment.component';

describe('ServicesAssignmentComponent', () => {
  let component: ServicesAssignmentComponent;
  let fixture: ComponentFixture<ServicesAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
