import { Component } from '@angular/core';
import { UsersList } from '../data/users.list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipes-project';

  myUserdata = UsersList;
  filterText = '';


  getInputValue(value: string){

    this.filterText = value;
    console.log(this.filterText)
  }

}
