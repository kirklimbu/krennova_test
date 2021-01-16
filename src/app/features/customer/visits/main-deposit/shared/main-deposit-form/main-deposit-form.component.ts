import { MainDepositService } from "./../../services/main-deposit.service";
import { DepositMain } from "./../../../../../../core/models/deposit-main.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, Inject, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { VisitDetailService } from "../../../visit-detail/services/visit-detail.service";
import { VisitDetailFormComponent } from "../../../visit-detail/shared/visit-detail-form/visit-detail-form.component";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-main-deposit-form",
  templateUrl: "./main-deposit-form.component.html",
  styleUrls: ["./main-deposit-form.component.scss"],
})
export class MainDepositFormComponent implements OnInit {
  /* props */
  mainDeposit = new DepositMain();
  mainDepositForm: FormGroup;
  mode = "add";
  status = "deposit";
  isSaveLoading: boolean;

  visitMainId: number;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private mainDepositService: MainDepositService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<VisitDetailFormComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any
  ) {}

  ngOnInit(): void {
    this.fetchMainDepositForm();
    this.buildMainDepositForm();
  }

  buildMainDepositForm() {
    if (this.mode === "add") {
      this.mainDepositForm = this.fb.group({
        visitMainId: [this.mainDeposit.visitMainId],
        amount: [this.mainDeposit.amount],
        depositDateBs: [this.mainDeposit.depositDateBs],
      });
    } else {
      this.mainDepositForm = this.fb.group({
        visitMainId: [this.mainDeposit.visitMainId],
        amount: [this.mainDeposit.amount],
        depositDateBs: [this.mainDeposit.depositDateBs],
      });
    }
  }

  fetchMainDepositForm() {
    /* START FROM HERE ERROR FROM SERVER */
    console.log("extraction");
    // this.spinner.show();
    this.route.queryParamMap.subscribe((params) => {
      console.log("extraction 2");

      this.visitMainId = +params.get("visitMainId");
      console.log(this.visitMainId);

      this.mainDepositService
        .getMainDepositFormValues(this.visitMainId)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe((res: any) => {
          /* SERVER IS RESPONDING WITH 400 ERROR */
          console.log(res);
          this.mainDeposit = res;
          this.buildMainDepositForm();
        });
    }),
      (err) => {
        err = err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("Error fetching param value.");
        this.spinner.hide();
      };
  }
  onSave() {
    console.log(this.mainDepositForm.value);
  }
  onCancel() {
    this.dialogRef.close();
  }
}
