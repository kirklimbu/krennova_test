import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  // props
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getChartData() {
    return this.http.get(`${this.API_URL}auth/dashboard`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
