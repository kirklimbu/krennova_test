import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule, MaterialModule],
})
export class SharedModule {}
