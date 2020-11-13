import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    // home
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./../home/home.module").then((m) => m.HomeModule),
        data: {
          // allowedRoles: [UserRoleType.ROLE_ALL],
        },
        // canActivate: [UserRoleGuardService],
      },
      {
        path: "client",
        loadChildren: () =>
          import("./../client/client.module").then((m) => m.ClientModule),
        data: {
          // allowedRoles: [UserRoleType.ROLE_ALL],
        },
        // canActivate: [UserRoleGuardService],
      },
      {
        path: "sms",
        loadChildren: () =>
          import("./../sms/sms.module").then((m) => m.SmsModule),
        data: {
          // allowedRoles: [UserRoleType.ROLE_ALL],
        },
        // canActivate: [UserRoleGuardService],
      },
      {
        path: "home",
        loadChildren: () =>
          import("./../home/home.module").then((m) => m.HomeModule),
        data: {
          // allowedRoles: [UserRoleType.ROLE_ALL],
        },
        // canActivate: [UserRoleGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
