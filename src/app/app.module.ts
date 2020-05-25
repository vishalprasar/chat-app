import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
//import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    UserModule,
    BrowserAnimationsModule, // required animations module
    RouterModule.forRoot([
      {path:'login',component:LoginComponent,pathMatch:'full'},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'*',redirectTo:'login',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
