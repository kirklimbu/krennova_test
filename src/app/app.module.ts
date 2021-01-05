import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPrintModule } from "ngx-print";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { JwtModule } from "@auth0/angular-jwt";
import { PovListComponent } from "./_components/pov-list/pov-list.component";

@NgModule({
  declarations: [AppComponent, PovListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
