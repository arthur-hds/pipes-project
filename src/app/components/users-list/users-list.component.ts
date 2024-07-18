import { Component, Input } from '@angular/core';
import { IUserResponse } from '../../../interface/user-response.interface';
import { UsersList } from '../../../data/users.list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  @Input({required: true})
  myUsersList :IUserResponse[] = [{}] as IUserResponse[];

  displayedColumns = ["user", "status", "date", "time", "value", "risck"]
}
