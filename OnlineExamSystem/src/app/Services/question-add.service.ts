import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionAddService {
  private ApiUrl="http://localhost:56347/api/Questions";

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  PostQuestions(question: Question[]): Observable<Question> {
    return this.httpClient.post<Question>(this.ApiUrl, 
      JSON.stringify(question),
      this.httpOptions)
  }


  getByName(name: string) {
    return this.httpClient.get<string>('http://localhost:56347/api/Subjects/' + name, this.httpOptions)
  }

  getAll(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.ApiUrl) 
  }

}
