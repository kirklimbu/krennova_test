import { CoreModule } from "src/app/core/core.module";
// angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// third-party
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// project
import { ClientRoutingModule } from "./client-routing.module";
import { ClientComponent } from "./pages/client/client.component";
import { ClientFormComponent } from "./shared/client-form/client-form.component";
import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NpDatepickerModule } from "angular-nepali-datepicker";

@NgModule({
  declarations: [ClientComponent, ClientFormComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    // CoreModule,
    NpDatepickerModule,
    FormsModule,
  ],
})
export class ClientModule {}
