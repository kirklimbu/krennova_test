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

@NgModule({
  declarations: [MainVisitComponent, VisitMainFormComponent],
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
})
export class VisitsModule {}
