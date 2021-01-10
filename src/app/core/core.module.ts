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

const DECLARATIONS: any[] = [
  // SidenavComponent,
  // QuickbarComponent,
  // ContentWrapperComponent,
  // PreloaderComponent,
  NavbarComponent,
  SidenavComponent,
  OnreturnDirective,
  ConnectorDirective,
];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, CoreRoutingModule, MaterialModule],
  exports: [...DECLARATIONS],
  // providers: [SidenavService],
})
export class CoreModule {}
