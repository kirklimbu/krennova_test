import { finalize } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";
import { DateFormatter } from "angular-nepali-datepicker";
import { Client } from "src/app/core/models/client";
import { PopupModalComponent } from "src/app/shared/popup-modal/popup-modal.component";
import { ClientService } from "../../services/client.service";

@Component({
  selector: "app-client-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.scss"],
})
export class ClientFormComponent implements OnInit {
  public customerForm: FormGroup;
  client: Client = new Client();
  visitDateBs: string;
  dob;
  regDate;
  mode = "add";
  customerId: number;

  isToday = true;
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
    private router: Router,
    public dialogRef: MatDialogRef<ClientFormComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any
  ) {}

  ngOnInit() {
    console.log(this.modalData);
    this.mode = this.modalData.mode;
    this.mode === "edit" ? this.fetchCustomerDetails() : null;
    this.buildCustomerForm();
  }

  fetchCustomerDetails() {
    this.spinner.show();
    this.customerId = this.modalData.customerDetails.id;
    this.clientService
      .getCustomerDetail(this.customerId)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((res: any) => {
       /* data STARRT FROM  HERE */
      })

  }

  buildCustomerForm() {
    if (this.mode === "add") {
      console.log("add form called");

      this.customerForm = this.formBuilder.group({
        name: [this.client.name],
        mobile: [this.client.mobile],
        address: [this.client.address],
        dob: [this.client.dob],
        regDateBs: [this.client.regDateBs],
        email: [this.client.email],
        visitType: [this.client.visitType],
        visitDateBs: [this.client.visitDateBs],
      });
    } else {
      console.log("edit form called");

      this.customerForm = this.formBuilder.group({
        id: [this.client.id],
        name: [this.client.name],
        mobile: [this.client.mobile],
        address: [this.client.address],
        dob: [this.client.dob],
        regDateBs: [this.client.regDateBs],
        email: [this.client.email],
        visitType: [this.client.visitType],
        visitDateBs: [this.client.visitDateBs],
      });
    }
  }
  createCustomer() {
    this.clientService.createCustomer(this.customerForm.value).subscribe(
      (data) => {
        console.log("subscribe vitra daddfa" + data);
        // this.customer = data;
        this.router.navigate(["/customerlist"]);
        // this.customerForm = data;?console.log('dafsdfsa' + this.customerForm);
        // tslint:disable-next-line:no-shadowed-variable
      },
      (error) => {
        console.log(" error vitra xu" + error);
      }
    );
  }

  onCancel() {
    console.log("cancel cliked");
    this.dialogRef.close();
  }

  onSave() {
    console.log(this.customerForm.value);
    this.dialogRef.close(this.customerForm.value);
  }
}
