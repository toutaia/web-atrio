import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {JsonPipe, NgForOf} from "@angular/common";
import {CreateUserComponent} from "../create-user/create-user.component";

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [
        NgForOf,
        JsonPipe,
        CreateUserComponent
    ],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss'
})
export class UsersComponent {

    get users() {
        return this._userService.users;
    }
    constructor(private _userService: UserService) {
    }
}
