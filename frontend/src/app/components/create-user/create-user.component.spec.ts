import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise an error', () => {
    component.user.birthDate = '1600-01-18'
    component.onCreateUser()
    expect(component.hasDateError).toBeTrue()
  });

  it('should not raise an error', () => {
    component.user.birthDate = '1995-01-18'
    component.onCreateUser()
    expect(component.hasDateError).toBeFalse()
  });
});
