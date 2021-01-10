import { EventEmitter, Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-save-cancel-buttons",
  templateUrl: "./save-cancel-buttons.component.html",
  styleUrls: ["./save-cancel-buttons.component.scss"],
})
export class SaveCancelButtonsComponent implements OnInit {
  /* props */
  @Output()
  save: EventEmitter<void> = new EventEmitter();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
