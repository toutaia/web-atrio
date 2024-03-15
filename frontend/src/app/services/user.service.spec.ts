import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientModule} from "@angular/common/http";

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add User', () => {

    expect(service.users).toHaveSize(1)
    service.addUser({
      firstName: '',
      lastName: '',
      birthDate: '',
      jobs: [],
    })
    expect(service.users).toHaveSize(2)
  });
});
