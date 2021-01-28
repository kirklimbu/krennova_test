import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./pages/user/user.component";
import { UserFormComponent } from "./shared/user-form/user-form.component";

const routes: Routes = [
  {
    path: "users",
    component: UserComponent,
  },
  {
    path: "add-user",
    component: UserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
