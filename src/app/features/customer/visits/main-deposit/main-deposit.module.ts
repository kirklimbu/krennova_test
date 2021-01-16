import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NpDatepickerModule } from "angular-nepali-datepicker";
import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainDepositRoutingModule } from "./main-deposit-routing.module";
import { MainDepositComponent } from "./pages/main-deposit/main-deposit.component";
import { MainDepositFormComponent } from "./shared/main-deposit-form/main-deposit-form.component";

const DECLARATIONS = [MainDepositComponent, MainDepositFormComponent];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    MainDepositRoutingModule,
    SharedModule,
    MaterialModule,
    NpDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...DECLARATIONS],
})
export class MainDepositModule {}
