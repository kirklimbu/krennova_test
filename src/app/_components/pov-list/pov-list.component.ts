import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-pov-list',
  templateUrl: './pov-list.component.html',
  styleUrls: ['./pov-list.component.scss']
})
export class PovListComponent implements OnInit {
  /* props */
  povListForm: FormGroup;
  displayedColumns: string [] = ['sn', 'pov'];
  clientListTableDataSource = ['1', 'test'];

  povTable: any;

  constructor(private formbuilder: FormBuilder,
  ) {

    this.povListForm = this.formbuilder.group({
      pov: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createPovForm() {
    return console.log(this.povListForm.value);
  }

  onCancel() {

  }
}
