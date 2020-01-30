import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {Client} from '../../_classes/client';
import {ApiService} from '../../_services/api.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

/*

export class InvoiceItem {
  stt = '';
  name = '';
  unit = '';
  qty = '';
  cost = '';
  total = 0;
}
*/

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  clientListTable: Client [] = [];
  clientListTableDataSource = new MatTableDataSource(this.clientListTable);
  displayedColumns: string [] = ['name', 'address', 'mobile', 'purposeOfVisit', 'action'];
  client: Client;

  constructor(private apiService: ApiService,
              private route: Router) {
  }

  ngOnInit() {
    // console.log('dfadfs' + this.clientListTableDataSource);
    /*this.apiService.getClientList()
      // .subscribe(response => {
      //   this.clientListTable = response;
      //   this.clientListTableDataSource.data = this.clientListTable;
      //   console.log('clientListTable');
      // }, error => {
      //   console.log(error);
      // });
       .subscribe(data => {
        this.client = data;
        console.log(JSON.stringify(this.client));
      }, error => {
        console.log(error);
      });*/

    /*this.apiService
      .getClientList()
      .pipe(first())
      .subscribe(data => {
        // this.loading = false;
        // this.client = data;
      }, error => {
        console.log(error);
      });*/
  }

}
