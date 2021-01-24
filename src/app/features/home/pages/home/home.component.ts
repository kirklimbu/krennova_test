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
  /* props */
  /* test data */
  surveyData = [
    { name: "Bikes", value: 105000 },
    { name: "Cars", value: 55000 },
    { name: "Trucks", value: 15000 },
    { name: "Scooter", value: 150000 },
    { name: "Bus", value: 2000 },
  ];
  /* test data end */

  charts: string[] = ["Vertical Bar", "Pie Chart", "Advance Pie Chart"];
  chartData$: Observable<any>;
  selectedChart: string;
  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.onChooseChart("Vertical Bar");
  }

  onChooseChart(chart: string) {
    console.log(chart);

    this.selectedChart = chart;
  }

  fetchChartData() {
    this.spinner.show;
    (this.chartData$ = this.homeService
      .getChartData()
      .pipe(finalize(() => this.spinner.hide()))),
      (err) => {
        this.toastr.error(err.message);
        this.spinner.hide();
      };
  }
}
