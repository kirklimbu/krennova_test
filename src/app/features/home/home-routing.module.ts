import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    loadChildren: () =>
      import("./../user/user.module").then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
