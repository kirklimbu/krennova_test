import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-action-buttons",
  templateUrl: "./action-buttons.component.html",
  styleUrls: ["./action-buttons.component.scss"],
})
export class ActionButtonsComponent implements OnInit {
  /* props */
  @Input()
  enableEdit = true;

  @Input()
  enableDelete = true;

  @Input()
  enableViewDetails = true;

  @Output()
  edit: EventEmitter<void> = new EventEmitter();

  @Output()
  delete: EventEmitter<void> = new EventEmitter();

  @Output()
  viewDetails: EventEmitter<void> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onViewDetails() {
    this.viewDetails.emit();
  }
}
