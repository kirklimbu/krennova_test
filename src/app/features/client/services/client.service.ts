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

  getCustomerList() {
    return this.http.get(`${this.API_URL}customers`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
