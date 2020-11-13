import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from '../shared/material-lib/material/material.module';
const DECLARATIONS: any[] = [
  NavbarComponent,
  // SidenavComponent,
  // QuickbarComponent,
  // ContentWrapperComponent, 
  // PreloaderComponent,
];
@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, CoreRoutingModule, MaterialModule],
  exports:[...DECLARATIONS]
})
export class CoreModule {}
