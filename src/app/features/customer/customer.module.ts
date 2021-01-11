import { BreadcrumbModule } from "xng-breadcrumb";
import { CoreModule } from "src/app/core/core.module";
// angular
import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// third-party
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// project
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerComponent } from "./pages/customer/customer.component";
import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NpDatepickerModule } from "angular-nepali-datepicker";
import { CustomerFormComponent } from "./shared/customer-form/customer-form.component";

@NgModule({
  declarations: [CustomerComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    CoreModule,
    NpDatepickerModule,
    FormsModule,
    BreadcrumbModule,
  ],
  providers: [DatePipe],
})
export class CustomerModule {}
