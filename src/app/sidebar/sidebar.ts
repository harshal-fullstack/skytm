import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  constructor(private Myservice:Myservice,private router:Router){}

  @Output() loginEvent = new EventEmitter<string>();
  
  sendmessage (val:any) {
    console.log('Sending login event:', val);
  this.loginEvent.emit(val);
  }

  ngOnInit(): void {
    this.userPhonenumber = sessionStorage.getItem("phoneNumber")
    this.getbalance();
  } 
  userPhonenumber:any;
  history:any;

  getbalance()
  {
    this.Myservice.getmybalance(this.userPhonenumber).subscribe(data=> {
      this.history=data.result;
    })
  }
  logout()
  {
    sessionStorage.removeItem("phoneNumber");
    sessionStorage.removeItem("isLoggedin");
    this.sendmessage(false);
    this.router.navigate(['/login']);

  }
}


