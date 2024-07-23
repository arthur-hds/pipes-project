import { Component, OnInit } from '@angular/core';
import { UsersList } from '../data/users.list';
import { Observable } from 'rxjs';
import { IUserResponse } from '../interface/user-response.interface';
import { UsersService } from './services/users.service';
import { UsersResponseList } from './types/users-response.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'pipes-project';

  filterText = '';


  constructor(private readonly users:UsersService){}

  $users!: Observable<UsersResponseList>;


  ngOnInit() {
    
    this.$users = this.users.getUsers();
    console.log(this.$users)

  }


  getInputValue(value: string){

    this.filterText = value;
    console.log(this.filterText)
  }

}
