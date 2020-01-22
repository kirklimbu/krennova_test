import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


export class InvoiceItem {
  stt = '';
  name = '';
  unit = '';
  qty = '';
  cost = '';
  total = 0;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  form: FormGroup;

  logoSrc = 'http://metaware.github.io/angular-invoicing/images/metaware_logo.png';

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder) {

  }


}
