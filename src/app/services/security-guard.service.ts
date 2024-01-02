import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SecurityGuardService {

  constructor(private http:HttpClient) { }

  createUser(user: any): Observable<any> {
    // Implement your logic to add a user
    return this.http.post(`${baseUrl}/auth/signup`, user);
  }
}
