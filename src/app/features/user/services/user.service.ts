import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // props
  API_URL = environment.apiUrl;
  usersCount: number;

  totalUsers$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {}

  getUserList(): any {
    return this.http
      .get(`${this.API_URL}`)
      .pipe(
        tap((res: any) => {
          let users = res;
          this.totalUsers$.next(users.length);
        })
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  addUser(user) {
    return this.http.post(`${this.API_URL}`, { ...user }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  deleteUser(id): any {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
