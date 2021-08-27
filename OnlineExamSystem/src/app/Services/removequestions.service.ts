import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemovequestionsService {
  private ApiUrl="http://localhost:56347/api/Questions/";

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  delete(subjectName: string) {
    return this.httpClient.delete<string>(this.ApiUrl + subjectName, this.httpOptions)
  }
}
