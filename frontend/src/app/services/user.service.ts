import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users: Array<UserModel> = [];

  constructor(private _requestService: RequestService) {
    this.users.push({
        id: 1,
        birthDate: "1995-01-18",
        firstName: 'antoine',
        lastName: 'toutain',
        jobs: []
      }

    )
  }

  addUser(newUser: UserModel) {
    this.users.push(newUser);
  }

}
