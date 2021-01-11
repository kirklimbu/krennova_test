import { ActivatedRoute } from "@angular/router";
import { DatePipe } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {
  MatDialogRef,
  MatTableDataSource,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { CustomerFormComponent } from "src/app/features/customer/shared/customer-form/customer-form.component";
import { VisitService } from "../../services/visit.service";

@Component({
  selector: "app-main-visit",
  templateUrl: "./main-visit.component.html",
  styleUrls: ["./main-visit.component.scss"],
})
export class MainVisitComponent implements OnInit {
  /* props */

  customerId: number;
  visitListDataSource$: Observable<any>;
  displayedColumns: string[] = [
    "S.n",
    "customerId",
    "totalCost",
    "remBal",
    "visitType",

    "action",
  ];
  visitListTable: any[] = [];

  customerListTableDataSource = new MatTableDataSource(this.visitListTable);
  constructor(
    private formBuilder: FormBuilder,
    private visitService: VisitService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log("called main visit");
    this.fetchParamFromUrl();
  }

  fetchParamFromUrl() {
    this.spinner.show();
    this.route.queryParamMap.subscribe((params) => {
      this.customerId = +params.get("id");
      this.visitListDataSource$ = this.visitService
        .getMainVisitList(this.customerId)
        .pipe(finalize(() => this.spinner.hide()));
    }),
      (err) => {
        err = err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("Error fetching param value.");
        this.spinner.hide();
      };
  }

  fetchMainVisitList() {}
}
