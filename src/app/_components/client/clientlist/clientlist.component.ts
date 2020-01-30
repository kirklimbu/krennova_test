import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Client} from '../../../_classes/client';
import {ApiService} from '../../../_services/api.service';
// import {LookupAddress} from 'dns';
// import {AddressInfo} from 'dgram';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {
  clientListTable = [];
  displayedColumns: string[] = ['name', 'address', 'mobile', 'pov'];
  customerListTableDataSource = new MatTableDataSource(this.clientListTable);

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getCustomerList()
      .subscribe(data => {
          console.log(data);
          this.clientListTable = data;
          this.customerListTableDataSource.data = this.clientListTable;
        }, error => {
          console.log(error);
        }
      );
  }

  // startEdit(name: any, address: (() => promise.Promise<string>) | string | LookupAddress[] | (() => { port: number; family: string; address: string }) | (() => AddressInfo) | { port: number; family: string; address: string } | HTMLElement, mobile: any) {

  // }
}
