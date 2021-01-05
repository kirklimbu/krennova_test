import { SidenavService } from "./../sidenav/services/sidenav.service";
import { Component, OnInit } from "@angular/core";

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
    public sidenav: SidenavService
  ) {}

  ngOnInit(): void {
    console.log(this.sidenav);
  }
  onChangeIcon() {
    this.toggleActive = !this.toggleActive;
  }
}
