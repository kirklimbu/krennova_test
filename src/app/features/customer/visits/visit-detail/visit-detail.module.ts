import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VisitDetailRoutingModule } from "./visit-detail-routing.module";
import { VisitDetailComponent } from "./pages/visit-detail/visit-detail.component";
import { VisitDetailFormComponent } from "./shared/visit-detail-form/visit-detail-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreModule } from "src/app/core/core.module";
import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { BreadcrumbModule } from "xng-breadcrumb";
import { NpDatepickerModule } from "angular-nepali-datepicker";

@NgModule({
  declarations: [VisitDetailComponent, VisitDetailFormComponent],
  imports: [
    CommonModule,
    VisitDetailRoutingModule,

    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    NgbModule,
    BreadcrumbModule,
    MaterialModule,
    NpDatepickerModule,
  ],
})
export class VisitDetailModule {}
