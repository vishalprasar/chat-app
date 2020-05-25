import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
     {path:'signup',component:SignupComponent,pathMatch:'full'} 
    ])
  ]
})
export class UserModule { }
