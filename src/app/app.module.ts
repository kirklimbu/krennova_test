import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPrintModule } from "ngx-print";
import { HttpClientModule } from "@angular/common/http";

import { PovListComponent } from "./_components/pov-list/pov-list.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerComponent } from "./shared/components/ngx-spinner/ngx-spinner.component";

@NgModule({
  declarations: [AppComponent, PovListComponent, NgxSpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    BrowserAnimationsModule,

    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent],
})
export class AppModule {}
