import { PopupModalComponent } from "./../../../../shared/components/popup-modal/popup-modal.component";
import { InvoiceService } from "./../../services/invoice.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormatDate } from "./../../../../core/constants/format-date";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Customer } from "src/app/core/models/customer";
import { ApiService } from "src/app/_services/api.service";
import { finalize } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"],
})
export class InvoiceComponent implements OnInit {
  /* props */
  formatDate = new FormatDate();
  clientListTable: Customer[] = [];
  invoiceListDataSource$: Observable<any>;
  clientListTableDataSource = new MatTableDataSource(this.clientListTable);
  displayedColumns: string[] = [
    "name",
    "address",
    "mobile",
    "purposeOfVisit",
    "action",
  ];
  invoice = {
    customerName: "Yemjee Shrestha",
    customerEmail: "YemjeeShrestha@gmail.com",
    customerMobile: "9858584758",
    customerAddress: "Damak 1",
    invoiceNum: 123,
    dateOfIssue: "2077/12/03",
    total: 2500,
  };
  orgDetail={
    organization:'Aama Dental Care Clinic Pvt Ltd'
  }
  client: Customer;

  constructor(
    private apiService: ApiService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private invoiceService: InvoiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onSearch(e) {
    console.log("invoice search" + JSON.stringify(e.fromDate));
    // date lai format garera backend api call garne
    /* test */
    this.spinner.show();
    if (e.status === "V") {
      // this.isVerified = true;
      (this.invoiceListDataSource$ = this.invoiceService
        .searchInvoices(
          e.status,
          this.formatDate.getFormatDate(e.fromDate),
          this.formatDate.getFormatDate(e.toDate)
        )
        .pipe(finalize(() => this.spinner.hide()))),
        (err) => {
          this.toastr.error(err.message);
        };
      this.invoiceListDataSource$.subscribe((res) => {
        console.log(res);
      });
    } else {
      // this.isVerified = false;

      (this.invoiceListDataSource$ = this.invoiceService
        .searchInvoices(
          e.status,
          this.formatDate.getFormatDate(e.fromDate),
          this.formatDate.getFormatDate(e.toDate)
        )
        .pipe(finalize(() => this.spinner.hide()))),
        (err) => {
          this.toastr.error(err.message);
        };
      this.invoiceListDataSource$.subscribe((res) => {
        console.log(res);
      });
    }
    /* test end */
  }

  onPrintStatusCheck() {
    const dialogRef = this.dialog.open(PopupModalComponent, {
      disableClose: true,
      width: "450px",
      data: {
        title: "",
        message: "Was the print successful?",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed " + result);
      result === "yes" ? this.savePrint() : null;
    });
  }
  savePrint() {}
}
