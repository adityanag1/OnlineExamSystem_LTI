import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../Models/exam';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private ApiUrl="http://localhost:56347/api/Exams";

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  postExam(exam: Exam): Observable<Exam> {
    return this.httpClient.post<Exam>(this.ApiUrl, JSON.stringify(exam), this.httpOptions)
  }   
  getExam(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(this.ApiUrl ) 
  }   
}
