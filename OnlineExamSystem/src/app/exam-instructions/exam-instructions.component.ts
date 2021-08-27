import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exam-instructions',
  templateUrl: './exam-instructions.component.html',
  styleUrls: ['./exam-instructions.component.css']
})
export class ExamInstructionsComponent implements OnInit {
  subjectName!: string;
  examDuration!: string;
  userid!:number;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.subjectName = String(sessionStorage.getItem('name'));
    this.userid= Number(sessionStorage.getItem('userid'));
    this.examDuration = String(sessionStorage.getItem('duration'));
    console.log(history.state.name);
    console.log("Exam Instructions ID")
    console.log(Number(sessionStorage.getItem('userid'))); 
    this.subjectName = history.state.name;
    console.log(history.state.duration);
    this.examDuration = history.state.duration;
  }
  // { state: { name:this.subjectName,duration:this.examDuration,subjectid:  history.state.subjectid,userid:Number(sessionStorage.getItem('userid'))} }
  startTest() {
    this.router.navigateByUrl('/Exam',);
  }
}
