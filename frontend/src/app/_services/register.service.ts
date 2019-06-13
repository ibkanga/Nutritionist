import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';
import { User } from  '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  SERVER = "http://localhost/Nutritionist/backend";

  constructor(private http: HttpClient) { }

  storeUser(user: User) {
    return this.http.post(`${this.SERVER}/registerUser.php`, { data: user });
  }
}
