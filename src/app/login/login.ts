import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Myservice, LoginModel, SignupModel } from '../myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  isloggedin: boolean = false;
  isLoginFormVisible: boolean = true;
  
  constructor(private myservice:Myservice,private router:Router){}

  loginmodel= new LoginModel;
  signupmodel=new SignupModel();

   @Output() loginEvent = new EventEmitter<string>();

    sendMessage(val:any){
    this.loginEvent.emit(val);
  }
  Data:any;

  toggleForm() {
    this.isLoginFormVisible = !this.isLoginFormVisible;
  }

  onLoginSubmit()
  {
   console.log('Login attempt with data:', this.loginmodel);
    this.myservice.Login(this.loginmodel).subscribe({
      next: (data) => {
        console.log('Login response:', data);
        this.Data = data.result;
        alert(data.response);
        if(data.response == 'Login Successfully !!'){
          this.sendMessage(true);
          sessionStorage.setItem("isLoggedin",'true');
          sessionStorage.setItem("phoneNumber", this.Data.phoneNumber);
          this.router.navigate(['/dasboard']);
        }
        else{
          this.sendMessage(false);
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        alert('Login failed. Please check your connection and try again.');
        this.sendMessage(false);
      }
    })
  }

  onSignupSubmit() {
    console.log('Signup attempt with data:', this.signupmodel);
    this.myservice.signup(this.signupmodel).subscribe({
      next: (data) => {
        console.log('Signup response:', data);
        alert(data.response);
        if(data.response && data.response.includes('successfully')) {
          this.isLoginFormVisible = true;
        }
      },
      error: (error) => {
        console.error('Signup error:', error);
        alert('Signup failed. Please check your connection and try again.');
      }
    })
  }

ngOnInit(): void {
  this.isloggedin = Boolean(sessionStorage.getItem("isLoggedin"))
     if (this.isloggedin) {
       this.router.navigate(['/dasboard']);
     }
     else{
      
     }
}
}
