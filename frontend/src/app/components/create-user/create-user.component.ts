import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePipe, JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    JsonPipe,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit {

  submitted = false;
  hasDateError: boolean = false;

  user: UserModel = {
    firstName: '',
    lastName: '',
    birthDate: new Date().toISOString().slice(0, 10),
    jobs: [],
  }

  oldestDate: string = '';

  ngOnInit() {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 150);
    this.oldestDate = date.toISOString().slice(0, 10);
  }

  constructor(private userService: UserService) {

  }

  onCreateUser() {
    if (this.user.birthDate > this.oldestDate) {

      this.userService.users.push(this.user);

      this.user = {
        firstName: '',
        lastName: '',
        birthDate: '',
        jobs: [],
      }
      this.hasDateError = false;
    } else {
      this.hasDateError = true;
    }
  }

  onReset() {
    this.submitted = false;

  }

  addJob() {
    this.user.jobs.push({
        company: '',
        job: '',
        start: '',
        end: '',
        isCurrentJob: false
      }
    )
  }
}
