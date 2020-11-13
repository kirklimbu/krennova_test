import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../_services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Client} from '../../../_classes/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  public customerForm: FormGroup;
  client: Client;


  // toppingList: string[] = ['acid etching', 'adhesion', 'adhesive', 'adjunctive', 'alloplastic', 'allogenic'];
  // tslint:disable-next-line:max-line-length
  toppingList: [{ id: number; type: string }, { id: number; type: string }, { id: number; type: string }, { id: number; type: string }, { id: number; type: string }, { id: number; type: string }] = [
    {
      'id': 1,
      'type': 'type-A'
    },
    {
      'id': 2,
      'type': 'type-B'
    },
    {
      'id': 3,
      'type': 'type-C'
    },
    {
      'id': 4,
      'type': 'type-D'
    },
    {
      'id': 5,
      'type': 'type-E'
    },
    {
      'id': 6,
      'type': 'type-F'
    }
  ];
  toppings: any;


  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      purposeOfVisit: ['', Validators.required]
    });
  }


  createCustomer() {
    this.apiService.createNewCustomer(this.customerForm.value)
      .subscribe(data => {
        console.log('subscribe vitra daddfa' + data);
        // this.customer = data;
        this.router.navigate(['/customerlist']);
        // this.customerForm = data;?console.log('dafsdfsa' + this.customerForm);
        // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        console.log(' error vitra xu' + error);
      });
  }

  onCancel() {

  }

  onlogin() {
    this.apiService.login(this.customerForm.value)
      .subscribe(data => {
        window.alert('login successful');

      }, exception => {
        window.alert(exception);
      });
  }
}
