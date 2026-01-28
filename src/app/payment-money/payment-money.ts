import { Component, OnInit } from '@angular/core';
import { Myservice, TransferMoneyModel } from '../myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-money',
  imports: [CommonModule,FormsModule],
  templateUrl: './payment-money.html',
  styleUrl: './payment-money.css'
})
export class PaymentMoney  implements OnInit{
  userPhonenumber:any;
    transfermoneymodel= new TransferMoneyModel();
    constructor(private Myservice:Myservice){}
  
    ngOnInit(): void {
        
      this.userPhonenumber = sessionStorage.getItem("phoneNumber")
    }
    transfermoney()
    {
      this.transfermoneymodel.senderPhoneNumber=this.userPhonenumber;
      this.Myservice.transfermoney(this.transfermoneymodel).subscribe(data=>{
        alert(data.response);
      });
    }

}
