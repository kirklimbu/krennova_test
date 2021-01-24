import { MaterialModule } from "./../../shared/material-lib/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { BreadcrumbModule } from "xng-breadcrumb";
/* third-party */

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    MaterialModule,
    FormsModule,
    /* third-party */
    BreadcrumbModule,
  ],
})
export class HomeModule {}
