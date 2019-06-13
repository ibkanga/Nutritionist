import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from  'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../_models/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SERVER = "http://localhost/Nutritionist/backend";

  constructor(private http: HttpClient, private router: Router) { }

  getUsers(user: User) {
    let params = new HttpParams().set('username', user.Username).set('password', user.Password);
    return this.http.get(`${this.SERVER}/loginUser.php`, {params});
  }

}
