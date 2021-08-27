import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../Models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  private ApiUrl="http://localhost:56347/api/Subjects";
  private getUrl = "http://localhost:56347/GetSubjectById"
  constructor(private httpClient: HttpClient) { }
  postSubject(subject: Subject): Observable<Subject> {
    return this.httpClient.post<Subject>(this.ApiUrl, JSON.stringify(subject), this.httpOptions)
    
  }   
  getSubject(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.ApiUrl) 
    
  }  
  getSubjectById(id:string): Observable<Subject> {
    return this.httpClient.get<Subject>(this.getUrl+"?id="+id) ;
    
  } 
}
