import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { LookupAddress } from "dns";
import { AddressInfo } from "net";
import { promise } from "protractor";
import { ClientService } from "../../services/client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  clientListTable :any []=[];
  displayedColumns: string[] = ["name", "address", "mobile", "pov"];
  customerListTableDataSource = new MatTableDataSource(this.clientListTable);

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.fetchClientList();
  }
  fetchClientList() {
    this.clientService.getCustomerList().subscribe(
      (data:any) => {
        console.log(data);
        this.clientListTable = data;
        this.customerListTableDataSource.data = this.clientListTable;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  startEdit(
    name: any,
    address:
      | (() => promise.Promise<string>)
      | string
      | LookupAddress[]
      | (() => { port: number; family: string; address: string })
      | (() => AddressInfo)
      | { port: number; family: string; address: string }
      | HTMLElement,
    mobile: any
  ) {}
}
