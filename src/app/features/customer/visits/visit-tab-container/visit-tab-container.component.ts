import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-visit-tab-container",
  templateUrl: "./visit-tab-container.component.html",
  styleUrls: ["./visit-tab-container.component.scss"],
})
export class VisitTabContainerComponent implements OnInit {
  /* props */
  label1 = "Visit";
  label2 = "Deposit";

  @Output()
  status: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendStatus(status: string) {
    console.log(status);

    this.status.emit();
  }
}
