import {Injectable} from '@angular/core';
import {Observable, pipe, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import { Customer } from '../core/models/customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private errMsg: string;
  baseUrl = 'http://localhost:8080/';


  constructor(private http: HttpClient) {
  }

  // Http Options
  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };*/

  //  Handle API errors

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  sendSms(smsValues: any) {
    return this.http.post(this.baseUrl, smsValues);
  }


  createNewCustomer(client: Customer) {
    return this.http
      .post(
        this.baseUrl + 'clients',
        client
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  getCustomerList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  login(value: any): Observable<any> {
   return this.http.post(this.baseUrl + 'login', value);
  }
}

