import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService{

  private ApiUrl="http://localhost:56347/api/Users";
 

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.ApiUrl, JSON.stringify(user), this.httpOptions)
    
  }   
  
 

}

