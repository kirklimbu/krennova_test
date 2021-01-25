import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appOnreturn]",
})
export class OnreturnDirective {
  // props
  private el: ElementRef;
  @Input() onReturn: string;

  constructor(private _el: ElementRef, renderer: Renderer2) {
    this.el = this._el;
    // renderer.setStyle(_el.nativeElement, 'color', 'red'); // changing color
  }

  @HostListener("keydown", ["$event"]) onKeyDown(e) {
    if (e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      if (e.srcElement.form) {
        console.log(e.srcElement.form);

        e.srcElement.form[3].focus();
      } else {
        console.log("close keyboard");
      }
      return;
    }
  }
}
