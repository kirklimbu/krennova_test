import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class VisitService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getMainVisitList(id?: number) {
    return this.http
      .get(`${this.API_URL}auth/customer/visit/main/list?customerId=${id}`)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
