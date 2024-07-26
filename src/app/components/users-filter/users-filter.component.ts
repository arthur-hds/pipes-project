import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss'
})
export class UsersFilterComponent {
  @Output("keyChanged")
  keyChanged = new EventEmitter<string>();


  //It takes the text from input
  onKeyChanged(text: KeyboardEvent){
    const textValue = text.target as HTMLInputElement;

    //Text will be emitted to app.ts
    this.keyChanged.emit(textValue.value)
    
  }


}
