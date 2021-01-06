import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DateFormatter } from "angular-nepali-datepicker";

@Component({
  selector: "app-table-top-bar",
  templateUrl: "./table-top-bar.component.html",
  styleUrls: ["./table-top-bar.component.scss"],
})
export class TableTopBarComponent implements OnInit {
  /* props */
  statuses: any[] = [
    {
      name: "Pending",
    },
  ];
  isSearchShowing = false;

  @Input()
  enableSearch = true;

  @Input()
  enableAdd = true;

  @Input()
  enableStatus = true;

  @Input()
  enableFromDate = true;

  @Input()
  enableToDate = true;

  // @Input()
  fromDate: string;

  @Input()
  toDate: string;

  @Input()
  status: string;

  keyword: string;

  @Output()
  add: EventEmitter<void> = new EventEmitter();

  @Output()
  search = new EventEmitter<{ status: any; fromDate: any; toDate: any }>();

  constructor() {}

  ngOnInit(): void {}

  fromDateFormatter: DateFormatter = (date) => {
    return `${date.year} / ${date.month + 1} / ${date.day} `;
  };
  toDateFormatter: DateFormatter = (date) => {
    return `${date.year} / ${date.month + 1} / ${date.day} `;
  };

  onAdd() {
    console.log("add click emitted");

    this.add.emit();
  }

  onSearch() {
    this.search.emit({
      status: this.status,
      fromDate: this.fromDate,
      toDate: this.toDate,
    });

    console.log("shared  search clicked" + JSON.stringify(this.fromDate));
  }
}
