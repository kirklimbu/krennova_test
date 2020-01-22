import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  const;
  baseUrl: 'localhost://api/';

  constructor(private http: HttpClient) {
  }

  createNewClient(formValue: any)/*: Observable<any>*/ {
    // return this.http.post(this.baseUrl , 'formValue');

  }

  sendSms(smsValues: any) {
    // return this.http.post(this.baseUrl, smsValues);
  }
}
