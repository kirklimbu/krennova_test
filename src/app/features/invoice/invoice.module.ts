import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoiceRoutingModule } from "./invoice-routing.module";
import { InvoiceComponent } from './pages/invoice/invoice.component';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [CommonModule, InvoiceRoutingModule, MaterialModule],
})
export class InvoiceModule {}
