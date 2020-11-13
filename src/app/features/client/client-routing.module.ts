import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientComponent } from "./pages/client/client.component";
import { ClientFormComponent } from './shared/client-form/client-form.component';

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
  },
  {
    path: "add-client",
    component: ClientFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
