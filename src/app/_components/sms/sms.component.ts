import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../_services/api.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  private smsForm: FormGroup;

  constructor(private fb: FormBuilder,
              private apiService: ApiService) {
  }

  ngOnInit() {

    this.smsForm = this.fb.group({

      mobile: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendSms() {
    this.apiService.sendSms(this.smsForm.value)
      .subscribe(resopnse => {
        console.log('sms respons' + resopnse);
      });

  }
}
