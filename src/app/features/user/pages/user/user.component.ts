import { PopupModalComponent } from "./../../../../shared/components/popup-modal/popup-modal.component";
import { User } from "src/app/core/models/user";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
// project

import { MatDialog } from "@angular/material";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  /* props */
  userListDataSource$: Observable<any>;

  userListTable: any[] = [];
  displayedColumns: string[] = ["name", "address", "age", "action"];
  userListTableDataSource = new MatTableDataSource(this.userListTable);

  userList: User[] = [];
  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchUserList();
  }
  fetchUserList() {
    this.userListDataSource$ = this.userService.getUserList().pipe(
      tap((res: any) => {
        this.userList = res;
      })
    );
  }

  onDelete(user) {
    const dialogRef = this.dialog.open(PopupModalComponent, {
      width: "450px",
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "yes") {
        this.spinner.show();
        const idx = this.userList.indexOf(user);
        const sub = this.userService.deleteUser(user.id).subscribe(
          (data) => {
            this.userList[idx] = data.result;
            this.toastr.success("User deleted successfully.");
            this.userList.splice(idx, 1);
            this.spinner.hide();
            sub.unsubscribe();
            this.fetchUserList();
          },
          (err) => {
            this.toastr.error("Error while removing user.");
            sub.unsubscribe();
          }
        );
      }
    });
  }
}
