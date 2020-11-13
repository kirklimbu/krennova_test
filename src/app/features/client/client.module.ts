import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { ClientComponent } from "./pages/client/client.component";
import { ClientFormComponent } from "./shared/client-form/client-form.component";
import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ClientComponent, ClientFormComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ClientModule {}
