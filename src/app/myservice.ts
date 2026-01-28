import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Myservice {
  constructor(private http:HttpClient) { }
  url='https://skytm-api.azurewebsites.net';
  // url='https://localhost:7149'

  signup(data:SignupModel):Observable<any>
  {
    console.log(data);
    return this.http.post<any>(this.url+'/api/Auth/signup',data)
  }
  Login(data:LoginModel):Observable<any>
  {
    return this.http.post<any>(this.url+'/api/Auth/login',data)
  }
  addMoney(data:AddMoneyModel)
  {
    return this.http.post<any>(this.url+'/api/Wallet/add', data);
  }
  gettransactionhistory(phoneNumber:any):Observable<any>
  {
    return this.http.get<any>(this.url+'/api/Transactions/history?phoneNumber='+phoneNumber);
  }
  transfermoney(data:TransferMoneyModel):Observable<any>
  {
    return this.http.post<any>(this.url+'/api/Transactions/pay',data);
  }
  getmybalance(phoneNumber:any):Observable<any>
  {
    return this.http.get<any>(this.url+'/api/Users/balance?phoneNumber='+phoneNumber);
  }
  delallrecord(phoneNumber:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'/api/Transactions/history?phoneNumber='+phoneNumber);
  }
  deloneid(transactionId:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'/api/Transactions/DeleteTransectionById?tid='+transactionId)
  }
  // getdetail(phoneNumber:any):Observable<any>
  // {
  //   return this.http.get<any>(this.url+'/api/Users/basic-list',+phoneNumber)
  // }

    
}
export class SignupModel{
  username: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  gender: string | undefined;
  password: string | undefined;
}
export class LoginModel{
  phoneNumber: string | undefined;
  password: string | undefined;
}
export class AddMoneyModel{
  [x: string]: any;
  phoneNumber: string | undefined;
  amount: number |undefined;
}
export class TransferMoneyModel{
  senderPhoneNumber: string | undefined;
  receiverPhoneNumber: string | undefined;
  amount: number |undefined;
}
