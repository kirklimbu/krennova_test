import { ClientFormComponent } from "./../../shared/client-form/client-form.component";
import { Router } from "@angular/router";
import { Client } from "src/app/core/models/client";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { LookupAddress } from "dns";
import { AddressInfo } from "net";
import { promise } from "protractor";
import { ClientService } from "../../services/client.service";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { FormatDate } from "src/app/core/constants/format-date";
// project
import { CustomJs } from "src/app/shared/customjs/custom.js";
import { DateFormatter } from "angular-nepali-datepicker";
import { PopupModalComponent } from "src/app/shared/components/popup-modal/popup-modal.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  /* props */
  clientListDataSource$: Observable<any>;
  formatDate = new FormatDate();
  customDate = new CustomJs();
  fromDate: any;
  fromDate2: any;
  toDate: any;
  clientListTable: any[] = [];
  displayedColumns: string[] = [
    "S.n",
    "name",
    "address",
    "mobile",
    // "visitType",
    "visitDate",
    "action",
  ];
  customerListTableDataSource = new MatTableDataSource(this.clientListTable);

  /* displaying nepali date */
  fromDateFormatter: DateFormatter = (date) => {
    return this.formatDate.getFormatDate(date);
  };
  toDateFormatter: DateFormatter = (date) => {
    return this.formatDate.getFormatDate(date);
  };

  clientListDataSource: Client[];
  /* fake data end */
  constructor(
    private clientService: ClientService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchClientList();
  }
  fetchClientList() {
    this.spinner.show();
    this.clientListDataSource$ = this.clientService
      .getCustomerList()
      .pipe(finalize(() => this.spinner.hide()));
    (err) => {
      this.toastr.error(err.message);
      this.spinner.hide();
    };
  }

  startEdit(
    name: any,
    address:
      | (() => promise.Promise<string>)
      | string
      | LookupAddress[]
      | (() => { port: number; family: string; address: string })
      | (() => AddressInfo)
      | { port: number; family: string; address: string }
      | HTMLElement,
    mobile: any
  ) {}

  onShowDetails() {}
  onSearch() {
    console.log();
  }

  onAdd(mode?: string, customer?: Client) {
    // this.router.navigate(['/dental/client/add-client'])
    const dialogRef = this.dialog.open(ClientFormComponent, {
      disableClose: true,

      // width: "450px",
      data: {
        mode: mode,
        customerDetails: customer,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      return; // remove on api intetration
      this.clientListDataSource$ = result; // if response has list
      this.fetchClientList(); //if response is not list -->  refreshing particular segment
      if (result) {
        console.log("yes");
        // this.clientService.createCustomer(result);
      } else {
        console.log("no");
      }
    });
  }
}
