import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { UserStatusPipe } from '../pipes/user-status.pipe';
import { ImageStatusPipe } from '../pipes/image-status.pipe';
import { UsersFilterComponent } from './components/users-filter/users-filter.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserStatusPipe,
    ImageStatusPipe,
    UsersFilterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
