import {
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from "@angular/core";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { SidenavService } from "./services/sidenav.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  /* props */
  @ViewChild("drawer", { static: true }) sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    console.log(this.sidenav);

    this.sidenavService.setSidenav(this.sidenav);
  }
}
