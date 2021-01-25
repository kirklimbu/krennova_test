import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-popup-modal",
  templateUrl: "./popup-modal.component.html",
  styleUrls: ["./popup-modal.component.scss"],
})
export class PopupModalComponent implements OnInit {
  title = "Confirm Delete";

  message = "Are you sure you want to remove this record?";
  // dialogRef;
  selectedId: number;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any // teacher component le teacher object pathako child component (delete componment lai)
  ) {
    this.title = this.modalData.title;
    this.message = this.modalData.message;
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close("yes");
  }

  dismiss() {
    // this.dialogRef.close( );
  }
}
