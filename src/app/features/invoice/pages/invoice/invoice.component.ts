import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Client } from "src/app/core/models/client";
import { ApiService } from "src/app/_services/api.service";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"],
})
export class InvoiceComponent implements OnInit {
  clientListTable: Client[] = [];
  clientListTableDataSource = new MatTableDataSource(this.clientListTable);
  displayedColumns: string[] = [
    "name",
    "address",
    "mobile",
    "purposeOfVisit",
    "action",
  ];
  client: Client;

  constructor(private apiService: ApiService, private route: Router) {}

  ngOnInit(): void {}
}
