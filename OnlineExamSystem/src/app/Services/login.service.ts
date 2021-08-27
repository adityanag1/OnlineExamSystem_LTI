import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Models/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ApiUrl="http://localhost:56347/adminLogin";

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Login(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.ApiUrl, JSON.stringify(admin), this.httpOptions)  
  } 
  
}
