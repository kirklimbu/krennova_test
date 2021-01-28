/* angular */
import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
/* third-party */
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerComponent } from "./shared/components/ngx-spinner/ngx-spinner.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { BreadcrumbModule } from "xng-breadcrumb";
/* project */
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
@NgModule({
  declarations: [AppComponent, NgxSpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbModule,
  ],

  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent],
})
export class AppModule {}
