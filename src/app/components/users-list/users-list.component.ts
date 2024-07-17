import { Component } from '@angular/core';
import { IUserResponse } from '../../../interface/user-response.interface';
import { UsersList } from '../../../data/users.list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  myUsersList :IUserResponse[] = UsersList;

  displayedColumns = ["user", "status", "date"]
}
