import { CustomJs } from "src/app/shared/customjs/custom.js";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { VisitDetail } from "./../../../../../../core/models/visit-detail.model";
import { Component, Inject, OnInit } from "@angular/core";
import { DateFormatter } from "angular-nepali-datepicker";
import { FormatDate } from "src/app/core/constants/format-date";
import { DatePipe } from "@angular/common";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { CustomerFormComponent } from "src/app/features/customer/shared/customer-form/customer-form.component";
import { VisitDetailService } from "../../services/visit-detail.service";
import { finalize, tap } from "rxjs/operators";

@Component({
  selector: "app-visit-detail-form",
  templateUrl: "./visit-detail-form.component.html",
  styleUrls: ["./visit-detail-form.component.scss"],
})
export class VisitDetailFormComponent implements OnInit {
  /* props */
  visitDetail = new VisitDetail();
  formatDate = new FormatDate();
  customDate = new CustomJs();
  visitDetailForm: FormGroup;

  mode = "add";
  visitDateBs: string;
  isItToday: boolean;
  visitMainId: number;

  visitDateFormatter: DateFormatter = (date) => {
    return this.formatDate.getFormatDate(date);
  };

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private visitDetailService: VisitDetailService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<VisitDetailFormComponent> // @Inject(MAT_DIALOG_DATA) private modalData: any
  ) {}

  ngOnInit(): void {
    this.fetchDefaultaFormValues();
    this.buildVisitDetailForm();
  }

  fetchDefaultaFormValues() {
    console.log("extraction");
    // this.spinner.show();
    this.route.queryParamMap.subscribe((params) => {
      console.log("extraction 2");

      this.visitMainId = +params.get("visitMainId");
      console.log(this.visitMainId);

      this.visitDetailService
        .getVisitDetailFormValues(this.visitMainId)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe((res: any) => {
          console.log(res);
          this.visitDetail = res;
          this.buildVisitDetailForm();
        });
    }),
      (err) => {
        err = err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("Error fetching param value.");
        this.spinner.hide();
      };
  }

  buildVisitDetailForm() {
    if (this.mode === "add") {
      this.visitDetailForm = this.fb.group({
        visitMainId: [this.visitDetail.visitMainId],
        dovisitMainIdctor: [this.visitDetail.doctor],
        visitDateBs: [this.visitDetail.visitDateBs],
        doctor: [this.visitDetail.doctor],
        visitAfterDay: [this.visitDetail.visitAfterDay],
        today: [this.visitDetail.today],
        itemList: this.fb.array([this.buildItemListForm()]),
      });
    } else {
      this.visitDetailForm = this.fb.group({
        id: [this.visitDetail.id],
        visitMainId: [this.visitDetail.visitMainId],
        visitDateBs: [this.visitDetail.visitDateBs],
        doctor: [this.visitDetail.doctor],
        today: [this.visitDetail.today],
        visitAfterDay: [this.visitDetail.visitAfterDay],
        itemList: this.fb.array([]),
      });
    }
  }

  itemList(): FormArray {
    return this.visitDetailForm.get("itemList") as FormArray;
  }

  buildItemListForm() {
    return this.fb.group({
      id: [],
      visitDetailId: [],
      amount: [],
      item: [],
    });
  }

  addItemList() {
    this.itemList().push(this.buildItemListForm());
  }

  removeItemList(i: number) {
    if (this.itemList().length === 1) {
      this.visitDetailForm.controls["itemList"].reset();
    } else {
      this.itemList().removeAt(i);
    }
  }
  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    console.log(this.visitDetailForm.value);
    this.visitDetailService
      .saveVisitMainForm(this.visitDetailForm.value)
      .subscribe(
        (res) => {
          this.dialogRef.close(res);
        },
        (err) => {
          err.error.message === err.error.message
            ? this.toastr.error(err.error.message)
            : this.toastr.error("Error  saving customer details.");
        }
      );
  }

  onDayCheck(e) {
    console.log(e);

    this.isItToday = e.checked;
  }
}
