import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.HomeModule),
  },

  {
    path: "",
    pathMatch: "full",
    redirectTo: "home", // change it to login page
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "home", // change it to page 404
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
