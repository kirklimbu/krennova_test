/* angualar */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
/* third-party */
import { MaterialModule } from "../shared/material-lib/material/material.module";
import { ToastrModule, ToastrService } from "ngx-toastr";
/* project */
import { NavbarComponent } from "./components/navbar/navbar.component";
const DECLARATIONS: any[] = [NavbarComponent];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-bottom-right",
      autoDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: "increasing",
    }),
  ],
  exports: [...DECLARATIONS],
  providers: [ToastrService],
})
export class CoreModule {}
