import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ListPageTemplateComponent } from './components/list-page-template/list-page-template.component';
import { NgxSpinnerComponent } from './components/ngx-spinner/ngx-spinner.component';
import { TableTopBarComponent } from './components/table-top-bar/table-top-bar.component';

@NgModule({
  declarations: [ActionButtonsComponent, ListPageTemplateComponent, NgxSpinnerComponent, TableTopBarComponent],
  imports: [CommonModule, SharedRoutingModule, MaterialModule],
})
export class SharedModule {}
