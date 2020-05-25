import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private appService:AppService, private router:Router) { }
  user={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    mobile:'',
    apiKey:''
  }

onSubmit(form:NgForm){
  //console.log(form.value.firstName);
  this.user.firstName = form.value.firstName;
  this.user.lastName = form.value.lastName;
  this.user.email = form.value.email;
  this.user.password = form.value.password;
  this.user.mobile = form.value.mobile;
  this.user.apiKey = form.value.apiKey;
  //console.log(this.user.lastName);
  this.appService.signUpFunction(this.user).subscribe((apiResponse)=>{
    if(apiResponse.status === 200){
      this.router.navigate(['/login']);
    }
    else{
      console.log(apiResponse);
    }
  });
}
  ngOnInit() {
  }

}
