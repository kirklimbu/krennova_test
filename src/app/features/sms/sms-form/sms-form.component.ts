import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-sms-form',
  templateUrl: './sms-form.component.html',
  styleUrls: ['./sms-form.component.scss']
})
export class SmsFormComponent implements OnInit {

  smsForm: FormGroup;

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