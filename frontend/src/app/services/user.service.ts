import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<UserModel> = [
    {
      id: 1,
      birthDate: "1995-01-18",
      firstName: 'antoine',
      lastName: 'toutain',
      jobs: []
    }

  ];

  constructor() { }
}
