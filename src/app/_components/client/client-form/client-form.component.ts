import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../_services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  clientForm: FormGroup;
  toppings = new FormControl();

  toppingList: string[] = ['acid etching', 'adhesion', 'adhesive', 'adjunctive', 'alloplastic', 'allogenic'];

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private router: ActivatedRoute,) {
  }

  ngOnInit() {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      purposeOfVisit: ['', Validators.required],
    });
  }

  createClient() {
    // this.apiService.createNewClient(this.clientForm.value);
      /*.subscribe(response => {
        console.log(response
        );
        window.alert('sms sent successfully to ');
        location.reload(true);

      });*/
  }

  onCancel() {

  }
}
