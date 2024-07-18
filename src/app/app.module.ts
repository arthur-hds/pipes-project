import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { UserStatusPipe } from '../pipes/user-status.pipe';
import { ImageStatusPipe } from '../pipes/image-status.pipe';
import { UsersFilterComponent } from './components/users-filter/users-filter.component';
import { UsersFilterPipe } from '../pipes/users-filter.pipe';
import { LOCALE_ID } from '@angular/core';
import localePt from "@angular/common/locales/pt"
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig, registerLocaleData } from '@angular/common';

registerLocaleData(localePt, "pt-BR")

const value: DatePipeConfig ={
  dateFormat: "dd/MM/YYYY",
  timezone: "+0000"
}


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserStatusPipe,
    ImageStatusPipe,
    UsersFilterComponent,
    UsersFilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: "pt-BR"
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "BRL"
    },

    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: value
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
