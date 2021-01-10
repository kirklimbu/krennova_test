import { Directive, EventEmitter } from "@angular/core";

@Directive({
  selector: "[appConnector]",
})
export class ConnectorDirective {

  /* props */
  updatedGap = new EventEmitter();
  updateRows = new EventEmitter();
  constructor() {}
}
