import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { finalize } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "src/app/core/models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  /* props */
  userForm: FormGroup;
  user: User = new User();
  mode = "add";
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.builduserForm();
  }

  builduserForm() {
    this.userForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required]],
      address: [this.user.address, [Validators.required]],
      age: [this.user.age, [Validators.required]],
    });
  }

  onSave() {
    this.spinner.show();

    if (this.userForm.valid) {
      this.loading = true;
      this.userService
        .addUser(this.userForm.value)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe(
          (res: any) => {
            this.loading = false;
            this.toastr.success("New user added successfully");
            this.router.navigate(["home/users"]);
          },
          (err) => {
            err.error.message === err.error.message
              ? this.toastr.error(err.error.message)
              : this.toastr.error("Error  saving user .");
            this.loading = false;
          }
        );
    } else {
      this.spinner.hide();
      return;
    }
  }
}
