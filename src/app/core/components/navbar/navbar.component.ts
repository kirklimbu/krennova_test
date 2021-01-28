import { UserService } from "./../../../features/user/services/user.service";

import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  /* props */
  usersCount: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.usersCount = this.userService.totalUsers$;
  }
}
