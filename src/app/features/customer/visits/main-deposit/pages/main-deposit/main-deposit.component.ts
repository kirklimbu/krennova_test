import { MainDepositFormComponent } from "./../../shared/main-deposit-form/main-deposit-form.component";
import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { VisitMainFormComponent } from "../../../shared/visit-main-form/visit-main-form.component";
import { VisitDetailService } from "../../../visit-detail/services/visit-detail.service";

@Component({
  selector: "app-main-deposit",
  templateUrl: "./main-deposit.component.html",
  styleUrls: ["./main-deposit.component.scss"],
})
export class MainDepositComponent implements OnInit {
  /* props */
  visitDetailListDataSource$: Observable<any>;
  visitDetailListDataSource: [] = [];
  displayedColumns: string[] = ["S.n", "depositDate", "amount", "action"];

  visitMainId: number;
  visitType: string;
  label1 = "Visit";
  label2 = "Deposit";
  customerVisitDetail;
  constructor(
    private visitDetailService: VisitDetailService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<MainDepositFormComponent>,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  fetchMainDepositlList() {}
  onAdd(mode: string, depositDetail?: any) {
    /* START BY CODE REFACTORING FROM HERE */
    console.log(depositDetail);
    const dialogRef = this.dialog.open(MainDepositFormComponent, {
      disableClose: true,
      // width: "450px",
      data: {
        mode: mode,
        customerDetails: depositDetail,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      /* YESKO RESPONSE MA SERVER LE LIST PANI PATHAUXA TESLAI TABLE MA POPULATE GARNE */

      if (result === (null || undefined)) {
        /* IF DATA IS NOT ADDED/ MODIFIED */

        this.fetchMainDepositlList();
      } else {
        /* IF NEW DATA IS ADDED/MODIFED
          RESPONSE NULL XAENA SO TABLE MA ASSIGN GARNE */
        // this.visitListDataSource$ = result; //UNCOMMENT AFTER BACKEND SENDS LIST

        this.fetchMainDepositlList(); // REMOVE AFTER BACKEND SENDS LIST
      }
    });
  }

  onViewDetails(deposit) {}

  onSearch() {}
}
