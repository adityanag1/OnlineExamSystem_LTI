import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) {}

  private url="http://localhost:56347/api/Search";

  getUserDetails(technology:string, state:string, city:string)
  {
      debugger;
      return this.http.get(this.url+"?technology="+technology+"&state="+state+"&city="+city);
  }

  getTechnologyList(){

      return this.http.get(this.url+"/Technology")
  }

  // getLevelList(){
  //     return this.http.get(this.url+"/Level")
  // }

  getStateList(){
      return this.http.get(this.url+"/State")
  }

  getCityList(state:string){
      return this.http.get(this.url+"/state/"+state)
  }
}
