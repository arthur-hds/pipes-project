import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { UserStatusPipe } from '../pipes/user-status.pipe';
import { ImageStatusPipe } from '../pipes/image-status.pipe';



@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserStatusPipe,
    ImageStatusPipe
    
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
