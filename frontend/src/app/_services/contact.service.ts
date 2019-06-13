import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from  'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Contact } from  '../_models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  SERVER = "http://localhost/Nutritionist/backend";

  constructor(private http: HttpClient) { }

  storeContact(contact: Contact) {
    return this.http.post(`${this.SERVER}/addContact.php`, { data: contact });
  }
}
