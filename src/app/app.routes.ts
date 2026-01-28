import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Sidebar } from './sidebar/sidebar';
import { Dasboard } from './dasboard/dasboard';
import { AddMoney } from './add-money/add-money';
import { PaymentMoney } from './payment-money/payment-money';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
       {path:'',redirectTo: '/login',pathMatch:'full'},
       {path:'login', component:Login},
       {path:'signup', component:Signup},
       {path:'dasboard', component:Dasboard},
       {path:'addmoney', component:AddMoney},
       {path:'transfermoney', component:PaymentMoney},
];
RouterModule.forRoot(routes, { useHash: true })

