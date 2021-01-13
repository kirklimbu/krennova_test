import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class VisitDetailService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getVisitDetailList(type: string, id?: number) {
    console.log("service list id" + id);

    return this.http
      .get(
        `${this.API_URL}auth/customer/visit/detail/list?type=${type}&visitMainId=${id}`
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  getVisitDetailFormValues(visitMainId?: number) {
    console.log('service called '+visitMainId);

    return this.http
      .get(
        `${this.API_URL}auth/customer/visit/detail/form?visitMainId=${visitMainId}`
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
  getVisitMainFormValuesForEdit(customerId?: number, visitMainId?: number) {
    return this.http
      .get(
        `${this.API_URL}auth/customer/visit/detail/form?customerId=${customerId}&visitMainId=${visitMainId}`
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
  saveVisitMainForm(mainForm) {
    console.log(mainForm);

    return this.http
      .post(`${this.API_URL}auth/customer/visit/detail/save`, { ...mainForm })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
