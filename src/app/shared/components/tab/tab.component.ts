import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"],
})
export class TabComponent implements OnInit {
  /* props */
  @Input()
  label1;
  @Input()
  label2;
  @Input()
  label3;
  @Input()
  enableTab1 = false;
  @Input()
  enableTab2 = false;
  @Input()
  enableTab3 = false;

  constructor() {}

  ngOnInit(): void {}
}
