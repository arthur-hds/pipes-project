import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss'
})
export class UsersFilterComponent {
  @Output("keyChanged")
  keyChanged = new EventEmitter<string>();

  onKeyChanged(text: KeyboardEvent){
    const textValue = text.target as HTMLInputElement;

    this.keyChanged.emit(textValue.value)
    
  }


}
