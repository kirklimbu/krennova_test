/* angular */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
/* project */
import { ActionButtonsComponent } from "./components/action-buttons/action-buttons.component";
import { ListPageTemplateComponent } from "./components/list-page-template/list-page-template.component";
import { CoreModule } from "src/app/core/core.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { TableActionButtonsComponent } from "./components/table-action-buttons/table-action-buttons.component";
import { FormGroupComponent } from "./components/form-group/form-group.component";
import { SaveCancelButtonsComponent } from "./components/save-cancel-buttons/save-cancel-buttons.component";
import { PopupModalComponent } from "./components/popup-modal/popup-modal.component";
import { BreadcurmbComponent } from "./components/breadcurmb/breadcurmb.component";
import { BreadcrumbModule } from "xng-breadcrumb";

const DECLARATIONS = [
  ActionButtonsComponent,
  ListPageTemplateComponent,
  TableActionButtonsComponent,
  FormGroupComponent,
  SaveCancelButtonsComponent,
  PopupModalComponent,
  BreadcurmbComponent,

];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgbModule,
    CoreModule,
    BreadcrumbModule,
  ],
  exports: [...DECLARATIONS],
})
export class SharedModule {}
