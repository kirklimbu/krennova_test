import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientFormComponent} from './_components/client/client-form/client-form.component';
import {InvoiceComponent} from './_components/invoice/invoice.component';
import {SmsComponent} from './_components/sms/sms.component';


const routes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthGuard],
    component: ClientFormComponent
  },
  {
    path: 'invoice',
    // canActivate: [AuthGuard],
    component: InvoiceComponent
  },
  {
    path: 'sms',
    // canActivate: [AuthGuard],
    component: SmsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
