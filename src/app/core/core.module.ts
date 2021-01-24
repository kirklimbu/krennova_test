import { AuthGuardService } from "./guards/auth/auth-guard.service";
import { DashboardComponent } from "./../features/dashboard/pages/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from "../shared/material-lib/material/material.module";
import { SidenavService } from "./components/sidenav/services/sidenav.service";
import { SidenavComponent } from "./components/sidenav/pages/sidenav.component";
import { OnreturnDirective } from "./directives/onreturn.directive";
import { ConnectorDirective } from "./directives/connector.directive";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpTokenInterceptorService } from "../core/http-interceptor/http-token/http-token-interceptor.service";
const DECLARATIONS: any[] = [
  NavbarComponent,
  SidenavComponent,
  OnreturnDirective,
  ConnectorDirective,
];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    NgxChartsModule,

    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-bottom-right",
      autoDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: "increasing",
    }),
  ],
  exports: [...DECLARATIONS,NgxChartsModule],
  providers: [ToastrService, AuthGuardService, ConnectorDirective],
})
export class CoreModule {}
