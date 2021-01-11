import { MaterialModule } from "../../../shared/material-lib/material/material.module";
import { SharedModule } from "../../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VisitsRoutingModule } from "./visits-routing.module";
import { MainVisitComponent } from "./pages/main-visit/main-visit.component";

@NgModule({
  declarations: [MainVisitComponent],
  imports: [CommonModule, VisitsRoutingModule, SharedModule, MaterialModule],
})
export class VisitsModule {}
