import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-dasboard',
  imports: [RouterLink,CommonModule,Sidebar],
  templateUrl: './dasboard.html',
  styleUrl: './dasboard.css'
})
export class Dasboard implements OnInit {
  constructor(private Myservice:Myservice,private router:Router){}
  ngOnInit(){
  var isloggedin = sessionStorage.getItem("isLoggedin")?.toString();
    if(isloggedin=="false") {
      console.log("User not logged in");
      this.router.navigate(['/login']);
    }


    this.userPhonenumber = sessionStorage.getItem("phoneNumber")
    this.gettransaction();
    this.getbalance();
  }
  userPhonenumber:any;
  history:any;
  balance: any;
  
  gettransaction()
  {
    this.Myservice.gettransactionhistory(this.userPhonenumber).subscribe  (data=> {
      this.history=data.result;
    })
  }
  getbalance()
  {
    this.Myservice.getmybalance(this.userPhonenumber).subscribe(data=> {
      this.balance=data.result.amount;
    })
  }
  delhistory()
  {
    this.Myservice.delallrecord(this.userPhonenumber).subscribe(data=>{
        this.history=data.result;
      })
  }
  delo(tId:any)
  {
    this.Myservice.deloneid(tId).subscribe(data=>{
      this.gettransaction();
    })
  }

}
 