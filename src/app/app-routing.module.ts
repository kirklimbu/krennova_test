import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientFormComponent} from './_components/client/client-form/client-form.component';


const routes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthGuard],
    component: ClientFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
