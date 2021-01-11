import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from "./pages/customer/customer.component";
import { CustomerFormComponent } from "./shared/customer-form/customer-form.component";

const routes: Routes = [
  {
    path: "",
    component: CustomerComponent,
    children: [
      {
        path: "visits",
        loadChildren: () =>
          import("./visits/visits.module").then((m) => m.VisitsModule),
        data: {
          // allowedRoles: [UserRoleType.ROLE_ALL],
        },
        // canActivate: [UserRoleGuardService],
      },
    ],
  },
  {
    path: "add-customer",
    component: CustomerFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
