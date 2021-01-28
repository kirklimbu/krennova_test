import { NgxSpinnerComponent } from "./../../../../shared/components/ngx-spinner/ngx-spinner.component";
import { ToastrService } from "ngx-toastr";
import { HomeService } from "./../../services/home.service";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {}

  fetchChartData() {}
}
