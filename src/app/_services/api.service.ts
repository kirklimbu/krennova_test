import {Injectable} from '@angular/core';
import {Observable, pipe, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Client} from '../_classes/client';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private errMsg: string;
  baseUrl: 'http://localhost:3000/clients';

  // baseUrl: 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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


  createNewCustomer(client: Client) {
    return this.http
      .post(
        this.baseUrl + 'clients',
        client,
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  getCustomerList(): Observable<any> {
    return this.http.get(this.baseUrl, this.httpOptions);
  }

  login(value: any) {
    return this.http.post(this.baseUrl, this.httpOptions);
  }
}

