import { CustomerModule } from "./../customer.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material-lib/material/material.module";
import { SharedModule } from "../../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VisitsRoutingModule } from "./visits-routing.module";
import { MainVisitComponent } from "./pages/main-visit/main-visit.component";
import { VisitMainFormComponent } from "./shared/visit-main-form/visit-main-form.component";
import { MatDialogRef } from "@angular/material";
import { NpDatepickerModule } from "angular-nepali-datepicker";

const DECLARATIONS = [MainVisitComponent, VisitMainFormComponent];
@NgModule({
  declarations: [...DECLARATIONS],
  providers: [],
  imports: [
    CommonModule,
    VisitsRoutingModule,
    SharedModule,
    MaterialModule,
    NpDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...DECLARATIONS],
})
export class VisitsModule {}
