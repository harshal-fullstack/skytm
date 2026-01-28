import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Myservice, SignupModel } from '../myservice';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit{
  signupmodel=new SignupModel();
  submitted = false;
    constructor(private fb : FormBuilder,private Myservice:Myservice,private router:Router){}

  onSubmit()
  {
    this.Myservice.signup(this.signupmodel).subscribe(data=>{
      alert(data.response);
    })
  }

ngOnInit() {
  console.log("loading");
      
}

}
