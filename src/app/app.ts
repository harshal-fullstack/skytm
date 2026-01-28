import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Signup } from './signup/signup';
import { Myservice } from './myservice';
import { Login } from "./login/login";
import { Dasboard } from "./dasboard/dasboard";
import { Sidebar } from './sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Sidebar, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
    constructor(private Myservice:Myservice,private router:Router){}
    isloggedin :boolean = false;
    ngOnInit() {
        this.isloggedin = Boolean(sessionStorage.getItem("isLoggedin"))
    }

    received(event:any){
      console.log(event)
      this.isloggedin=event;
      console.log('Login event received:',event);
   
    }


}
