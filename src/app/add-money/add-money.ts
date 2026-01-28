import { Component, OnInit } from '@angular/core';
import { AddMoneyModel, Myservice } from '../myservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-money',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-money.html',
  styleUrl: './add-money.css'
})
export class AddMoney implements OnInit{
  userPhonenumber:any;
  addmoneymodel= new AddMoneyModel();
  constructor(private Myservice:Myservice){}

  ngOnInit(): void {
      
    this.userPhonenumber = sessionStorage.getItem("phoneNumber")
  }
  addMoney()
  {
    this.addmoneymodel.phoneNumber=this.userPhonenumber;
    this.Myservice.addMoney(this.addmoneymodel).subscribe(data=>{
      alert(data.response);
    });
  }

}
