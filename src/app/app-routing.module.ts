import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientFormComponent} from './_components/client/client-form/client-form.component';
import {InvoiceComponent} from './_components/invoice/invoice.component';
import {SmsComponent} from './_components/sms/sms.component';
import {PovListComponent} from './_components/pov-list/pov-list.component';
import {ClientlistComponent} from './_components/client/clientlist/clientlist.component';


const routes: Routes = [
  {
    path: 'newclient',
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
  {
    path: 'pov',
    // canActivate: [AuthGuard],
    component: PovListComponent
  },
  {
    path: 'clientlist',
    // canActivate: [AuthGuard],
    component: ClientlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
