import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../Models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService{

  private ApiUrl="http://localhost:56347/login";
  private emailUrl="http://localhost:56347/GetUsersByEmail";
  private getUrl = "http://localhost:56347/GetUsersById";

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  Login(user: User): Observable<User> {
    return this.httpClient.post<User>(this.ApiUrl, JSON.stringify(user), this.httpOptions)
    
  }   
  getUser(id:number): Observable<User> {
    return this.httpClient.get<User>(this.getUrl+"?id="+id)
    
  } 
  getbyemail(email: string): Observable<User> {
    console.log("hello I am in getall");
    let url = this.emailUrl +"?email=" +email
    console.log(url);
    return this.httpClient.get<User>(url); 
    
  }
  
 

}