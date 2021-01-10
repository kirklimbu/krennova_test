import { EventEmitter, HostBinding, Input, Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ConnectorDirective } from "src/app/core/directives/connector.directive";

@Component({
  selector: "app-form-group",
  templateUrl: "./form-group.component.html",
  styleUrls: ["./form-group.component.scss"],
})
export class FormGroupComponent implements OnInit {
  /* props */
  /* test */
  /* sub; // Unsubscribe

  gapInPx = 10;
  @HostBinding("style.gap") gap;

  rowsInFr = 4;
  @HostBinding("style.grid-template-rows") rows; */

  /* test end */
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
    private sanitizer: DomSanitizer,
    private connector: ConnectorDirective
  ) {}

  ngOnInit(): void {
    /* this.sub = this.connector.updatedGap.subscribe((val) => {
      if (val) this.gapInPx += 5;
      else if (this.gapInPx > 0) this.gapInPx -= 5;
      this.gap = `${this.gapInPx}px`;
    });

    const rowSub = this.connector.updateRows.subscribe((val) => {
      if (val) this.rowsInFr += 1;
      else if (this.rowsInFr > 1) this.rowsInFr -= 1;
      this.rows = this.sanitizer.bypassSecurityTrustStyle(
        `repeat(${this.rowsInFr}, 1fr)`
      );
    });
 */
    // this.sub.add(rowSub);
  }

  onSave() {
    console.log('emmit save');

    this.save.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
