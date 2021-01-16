import { CustomJs } from "src/app/shared/customjs/custom.js";
import { FormatDate } from "../../../../core/constants/format-date";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";
import { DateFormatter } from "angular-nepali-datepicker";
import { Customer } from "src/app/core/models/customer";
import { ClientService } from "../../services/client.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-customer-form",
  templateUrl: "./customer-form.component.html",
  styleUrls: ["./customer-form.component.scss"],
})
export class CustomerFormComponent implements OnInit {
  /* props */
   customerForm: FormGroup;
  client: Customer = new Customer();
  visitDateBs: string;
  dob: string;
  regDate: string;
  mode = "add";
  customerId: number;

  isItToday: boolean;
  hideRegDate = false;
  formatDate = new FormatDate();
  customDate = new CustomJs();
  dobDateFormatter: DateFormatter = (date) => {
    return `${date.year} / ${date.month + 1} / ${date.day} `;
  };
  regDateFormatter: DateFormatter = (date) => {
    return `${date.year} / ${date.month + 1} / ${date.day} `;
  };

  toppingList: [
    { id: number; type: string },
    { id: number; type: string },
    { id: number; type: string },
    { id: number; type: string },
    { id: number; type: string },
    { id: number; type: string }
  ] = [
    {
      id: 1,
      type: "type-A",
    },
    {
      id: 2,
      type: "type-B",
    },
    {
      id: 3,
      type: "type-C",
    },
    {
      id: 4,
      type: "type-D",
    },
    {
      id: 5,
      type: "type-E",
    },
    {
      id: 6,
      type: "type-F",
    },
  ];
  toppings: any;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any
  ) {}

  ngOnInit() {

    this.mode = this.modalData.mode;
    this.mode === "edit" ? this.fetchCustomerDetails() : this.fetchFormValues();
    this.buildCustomerForm();
  }



  fetchFormValues() {
    this.spinner.show();
    this.clientService
      .getCustomerForm()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((res: Customer) => {
        this.isItToday = res.today;
      });
  }

  fetchCustomerDetails() {
    this.spinner.show();
    this.customerId = this.modalData.customerDetails.id;
    this.clientService
      .getCustomerDetail(this.customerId)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe(
        (res: any) => {
          this.mode = "edit";
          this.client = res;
          this.dob = this.customDate.getDatePickerObject(this.client.dob);
          this.buildCustomerForm();
        },
        (err) => {
          err.error.message === err.error.message
            ? this.toastr.error(err.error.message)
            : this.toastr.error("Error fetching customer details.");
          this.spinner.hide();
        }
      );
  }

  buildCustomerForm() {
    if (this.mode === "add") {


      this.customerForm = this.formBuilder.group({
        name: [this.client.name],
        mobile: [this.client.mobile],
        // address: [this.client.address],
        dob: [this.client.dob],
        today: [this.client.today],
        regDateBs: [this.client.regDateBs],
        email: [this.client.email],
        /*  visitType: [this.client.visitType],
        visitDateBs: [this.client.visitDateBs], */
      });
    } else {


      this.customerForm = this.formBuilder.group({
        id: [this.client.id],
        name: [this.client.name],
        mobile: [this.client.mobile],
        // address: [this.client.address],
        dob: [this.client.dob],
        today: [this.client.today],

        regDateBs: [this.client.regDateBs],
        email: [this.client.email],
      });
    }
  }

  onCancel() {

    this.dialogRef.close();
  }

  onSave() {

    let dob = this.customDate.getStringFromNepaliFunction(this.dob);
    this.customerForm.controls["dob"].setValue(dob);

    this.clientService.createCustomer(this.customerForm.value).subscribe(
      (res) => {
        this.dialogRef.close(res);
      },
      (err) => {
        err.error.message === err.error.message
          ? this.toastr.error(err.error.message)
          : this.toastr.error("Error  saving customer details.");
      }
    );
    // this.dialogRef.close(this.customerForm.value);
  }

  onDayCheck(e) {
    this.isItToday = e.checked;
  }
}
