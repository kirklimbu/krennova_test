import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CoreModule } from "src/app/core/core.module";
import { SidenavService } from "src/app/core/components/sidenav/services/sidenav.service";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, CoreModule],
  providers: [SidenavService],
})
export class DashboardModule {}
