import { Component, Input, OnInit } from '@angular/core';
import {  HostListener } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-examend',
  templateUrl: './examend.component.html',
  styleUrls: ['./examend.component.css']
})
export class ExamendComponent implements OnInit {

  @HostListener('window:popstate', ['$event'])
    onBrowserBackBtnClose(event: Event) {
    console.log('back button pressed');
    event.preventDefault(); 
    this.router.navigateByUrl('/Login');
    console.log("going back");
}

  constructor(public router: Router) { }
  dashboard(){
    this.router.navigateByUrl('/UserDashboard');
  }
  @Input()total!: number;
  username!: string;
  level1marks!: number;
  level2marks!: number;
  level3marks!: number;
  subjectname!: string;
  dateofexam!: string;
  passorfail!:string;
  ngOnInit(): void {
  this.username = history.state.username;
  this.level1marks= history.state.level1marks;
  this.level2marks= history.state.level2marks;
  this.level3marks= history.state.level3marks;
  if (this.level1marks<4 || this.level2marks<4||this.level1marks<4){
    this.passorfail="Fail";
  }
  else{
    this.passorfail="Pass";
  }
  this.dateofexam = history.state.dateofexam;
  this.subjectname = history.state.subjectname;
  console.log(history.state.username)

  
    
    
  }

}
