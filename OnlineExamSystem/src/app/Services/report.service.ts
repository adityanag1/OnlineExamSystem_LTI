import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../Models/Exam';
import { Subject } from '../Models/Subject';
import { Users } from '../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http:HttpClient) { }
  url1: string = "http://localhost:56347/api/Users";
  url2: string = "http://localhost:56347/api/Subjects";
  url3: string = "http://localhost:56347/api/Exams";


  getAllUsers():Observable<Users[]>
  {
    return this.http.get<Users[]>(this.url1);
  }

  getAllSubjects():Observable<Subject[]>
  {
    return this.http.get<Subject[]>(this.url2);
  }

  getAllExams():Observable<Exam[]>
  {
    return this.http.get<Exam[]>(this.url3);
  }
}
