// angular
import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// third-party
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// project
import { UserRoutingModule } from "./user-routing.module";
import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { UserComponent } from "./pages/user/user.component";
import { UserFormComponent } from "./shared/user-form/user-form.component";
import { BreadcrumbModule } from "xng-breadcrumb";
import { CoreModule } from "src/app/core/core.module";
const DECLARATIONS = [UserComponent, UserFormComponent];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    CoreModule,
    FormsModule,
    BreadcrumbModule,
  ],
  exports: [...DECLARATIONS],
  providers: [DatePipe],
})
export class UserModule {}
