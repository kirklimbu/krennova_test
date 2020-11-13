import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators/map";
import { User } from "src/app/core/models/user.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  // backend api
  API_URL = environment.apiUrl;

  //props
  error: any;
  loading = false;
  constructor(private http: HttpClient) {}

  getLogin(username, password): any {
    console.log("calling login service ");

    return this.http
      .post<User>(`${this.API_URL}login`, { username, password })
      .pipe(
        map((res) => {
          console.log(res +'login response');

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("token", res.token);
          localStorage.setItem(
            "ServiceKey",
            "kdu9i4jndc9o#dsjd%fdj*df(adf@ksdjf)djfj/lkjdf"
          );
        })
      );
  }
}
