import { Component, Input } from '@angular/core';
import { IUserResponse } from '../../../interface/user-response.interface';
import { UsersResponseList } from '../../types/users-response.type';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  @Input({required: true})
  myUsersList :UsersResponseList = [{}] as UsersResponseList;

  displayedColumns = ["user", "status", "date", "time", "value", "risck"]
}
