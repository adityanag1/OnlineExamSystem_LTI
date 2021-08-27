import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Question} from '../Models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  ApiUrl : string = "http://localhost:56347/api/Questions"
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAll(): Observable<Question[]> {
    console.log("hello I am in getall");
    return this.httpClient.get<Question[]>(this.ApiUrl )    
  }
}
