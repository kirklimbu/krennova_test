import { ConnectorDirective } from "./../core/directives/connector.directive";
import { CoreModule } from "src/app/core/core.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActionButtonsComponent } from "./components/action-buttons/action-buttons.component";
import { ListPageTemplateComponent } from "./components/list-page-template/list-page-template.component";
import { TableTopBarComponent } from "./components/table-top-bar/table-top-bar.component";
import { JwtModule } from "@auth0/angular-jwt";
import { NpDatepickerModule } from "angular-nepali-datepicker";
import { FormsModule } from "@angular/forms";

import { TableActionButtonsComponent } from "./components/table-action-buttons/table-action-buttons.component";
import { FormGroupComponent } from "./components/form-group/form-group.component";
import { SaveCancelButtonsComponent } from "./components/save-cancel-buttons/save-cancel-buttons.component";
import { PopupModalComponent } from "./components/popup-modal/popup-modal.component";
import { BreadcurmbComponent } from "./components/breadcurmb/breadcurmb.component";
import { BreadcrumbModule } from "xng-breadcrumb";
import { TabComponent } from "./components/tab/tab.component";

const DECLARATIONS = [
  ActionButtonsComponent,
  ListPageTemplateComponent,
  TableTopBarComponent,
  TableActionButtonsComponent,
  FormGroupComponent,
  SaveCancelButtonsComponent,
  PopupModalComponent,
  BreadcurmbComponent,
  TabComponent,
];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    MaterialModule,
    NpDatepickerModule,
    FormsModule,
    NgbModule,
    CoreModule,
    BreadcrumbModule,
  ],
  exports: [...DECLARATIONS],
})
export class SharedModule {}
