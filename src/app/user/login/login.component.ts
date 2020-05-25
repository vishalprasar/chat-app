import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form',{static:false})loginForm:NgForm

  constructor(private http:HttpClientModule,private appService:AppService,private router:Router) { }

  ngOnInit() {
  }
  user = {
    email:'',
    password:''
  }
  onSubmit(){
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    console.log(this.user);
    this.appService.signInFunction(this.user).subscribe((apiResponse)=>{
      if(apiResponse.status === 200)
      {
        //this.toastr.success('Hello world!', 'Toastr fun!');
        //console.log(apiResponse.data.authToken);
        //console.log(apiResponse.data.userDetails);
        Cookie.set('authtoken',apiResponse.data.authToken);
        Cookie.set('receiverId', apiResponse.data.userDetails.userId);  
        Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
        this.appService.setUserInfoFromLocalStorage(apiResponse.data.userDetails);
        this.router.navigate(['/chat']);
      }
      else{
        console.log(apiResponse.error.message)
      }
    })
  }

}
