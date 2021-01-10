import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  // props
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCustomerDetail(id?: number) {
    return this.http.get(`${this.API_URL}auth/customer/form?id=${id}`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  getCustomerList() {
    return this.http.get(`${this.API_URL}auth/customer/list`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  createCustomer(customer) {
    console.log("create service claled");

    console.log(JSON.stringify(customer));
    return this.http.post(`${this.API_URL}letter/save`, { ...customer }).pipe(
      catchError((err) => {
        console.log("error 1 fdgdfgdffsdfsf");

        return throwError(err);
      })
    );
  }
}
