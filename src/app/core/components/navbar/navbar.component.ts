import { MatSidenav } from "@angular/material";
import { SidenavService } from "./../sidenav/services/sidenav.service";
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  /* props */
  toggleActive: boolean = false;
  constructor(
    /* this value toggles our sidenav html=> sidenav.toggle() */
    public sidenav: SidenavService) {}

  ngOnInit(): void {
    console.log(this.sidenav);
  }


}
