import { MaterialModule } from "src/app/shared/material-lib/material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { ActionButtonsComponent } from "./components/action-buttons/action-buttons.component";
import { ListPageTemplateComponent } from "./components/list-page-template/list-page-template.component";
import { TableTopBarComponent } from "./components/table-top-bar/table-top-bar.component";
import { JwtModule } from "@auth0/angular-jwt";
import { NpDatepickerModule } from "angular-nepali-datepicker";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpTokenInterceptorService } from "../core/http-interceptor/http-token/http-token-interceptor.service";

const DECLARATIONS = [
  ActionButtonsComponent,
  ListPageTemplateComponent,
  TableTopBarComponent,
];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    NpDatepickerModule,
    FormsModule,
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
  ],
})
export class SharedModule {}
