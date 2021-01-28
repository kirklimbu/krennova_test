import { EventEmitter, HostBinding, Input, Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material";

@Component({
  selector: "app-form-group",
  templateUrl: "./form-group.component.html",
  styleUrls: ["./form-group.component.scss"],
})
export class FormGroupComponent implements OnInit {
  /* props */

  @Input()
  for = "";

  @Input()
  label = "";

  @Input()
  required = false;

  @Output()
  save: EventEmitter<void> = new EventEmitter();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter();
  constructor(
    private spinner: MatProgressSpinnerModule,
  ) {}

  ngOnInit(): void {}

  onSave() {
    console.log("emmit save");

    this.save.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
