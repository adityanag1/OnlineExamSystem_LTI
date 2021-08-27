import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchservice:SearchService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getallTechList();
    this.getallStateList();
    // this.getallLevelList();
    this.SearchUForm = this.fb.group(
      {technology:['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]],
      // level:['',[Validators.required]],
      // mark1:['',[Validators.required]],
      // mark2:['',[Validators.required]]
    });
  }

  SearchUForm:any;
  techList?:any;
  levelList?:any;
  stateList?:any;
  cityList?:any
  result:any[] = [];
  tbltoggle: boolean = false;

  Object:any;

  getDetails(technology:string, state:string, city:string)
  {
    return this.searchservice.getUserDetails(technology, state, city)
    .subscribe((data)=>{this.Object=data; this.result = this.Object;
      console.log(data)
      if(this.result.length===0){
        alert("No record found!!")
      }
    },err=>console.log(err.error))
  }

  getallTechList(){
    this.searchservice.getTechnologyList().subscribe((data)=>{
    console.log(data)
    this.techList=data
    console.log(this.techList)})

  }

  // getallLevelList(){
  //   this.searchservice.getLevelList().subscribe((data)=>{
  //   console.log(data)
  //   this.levelList=data
  //   console.log(this.levelList)})

  // }

  getallStateList(){
    this.searchservice.getStateList().subscribe((data)=>{
    console.log(data)
    this.stateList=data
    console.log(this.stateList)})

  }

  getCitybyState(event:any){
    this.searchservice.getCityList((event.target.value)).subscribe((data) =>{
      this.cityList = data
      console.log(this.cityList)})
  }

  searchToggle(){
    this.tbltoggle =  !this.tbltoggle;
  }

}
