import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {

  }

  /* get isLoggedIn() {
    console.log(this.loggedIn.asObservable());

    return this.loggedIn.asObservable();
  } */

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
      return !this.jwtHelper.isTokenExpired(token);
    } else return false;
  }

 /*  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    // this.userSubject.next(null);
    this.router.navigate(['/home/letter']);
  } */
}
