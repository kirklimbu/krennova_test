import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClientFormComponent} from './_components/client/client-form/client-form.component';
import {MaterialModule} from './material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPrintModule} from 'ngx-print';
import { InvoiceComponent } from './_components/invoice/invoice.component';
import { SmsComponent } from './_components/sms/sms.component';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { ClientlistComponent } from './_components/client/clientlist/clientlist.component';
import { PovListComponent } from './_components/pov-list/pov-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    InvoiceComponent,
    SmsComponent,
    ClientlistComponent,
    PovListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    BrowserAnimationsModule, ToastrModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
