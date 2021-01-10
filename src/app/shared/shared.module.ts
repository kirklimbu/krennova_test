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
import { ToastrModule } from "ngx-toastr";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpTokenInterceptorService } from "../core/http-interceptor/http-token/http-token-interceptor.service";
import { TableActionButtonsComponent } from "./components/table-action-buttons/table-action-buttons.component";
import { FormGroupComponent } from "./components/form-group/form-group.component";
import { SaveCancelButtonsComponent } from "./components/save-cancel-buttons/save-cancel-buttons.component";
import { PopupModalComponent } from './popup-modal/popup-modal.component';

const DECLARATIONS = [
  ActionButtonsComponent,
  ListPageTemplateComponent,
  TableTopBarComponent,
  TableActionButtonsComponent,
  FormGroupComponent,
  SaveCancelButtonsComponent,
];
@NgModule({
  declarations: [...DECLARATIONS, PopupModalComponent, ],
  imports: [
    CommonModule,
    MaterialModule,
    NpDatepickerModule,
    FormsModule,
    NgbModule,
    CoreModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: "toast-bottom-right",
      autoDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: "increasing",
    }),
    JwtModule.forRoot({
      config: {
        // ...
        tokenGetter: () => {
          return localStorage.getItem("token");
        },
        throwNoTokenError: true,
      },
    }),
  ],
  exports: [...DECLARATIONS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptorService,
      multi: true,
    },
    ConnectorDirective,
  ],
})
export class SharedModule {}
