import { Component, OnInit } from '@angular/core';
import { ExamService } from '../Services/exam.service';
import { LoginService } from '../Services/login-service.service';
import { SubjectService } from '../Services/subject.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  passorfail!: string;

  constructor(private login: LoginService, private subject:SubjectService,private exam:ExamService) { }
  username !:string;
  examid!:number;
  level1marks!:number;
  level2marks!:number;
  level3marks!:number;
  dateofexam!:string;
  subjectname!:string;
  ngOnInit(): void {
    this.login.getUser(Number(sessionStorage.getItem('userid'))).subscribe(data=>{
        this.username = data.name;

    });

 

    this.examid = Number( sessionStorage.getItem('examid'));
    this.subjectname = String( sessionStorage.getItem('reportsubjectname'));
    this.dateofexam = String(sessionStorage.getItem('reportdateofexam'));
    this.level1marks = Number(sessionStorage.getItem('level1marks'));
    this.level2marks = Number( sessionStorage.getItem('level2marks'));
    this.level3marks = Number( sessionStorage.getItem('level3marks'));
    if (this.level1marks<4 || this.level2marks<4||this.level1marks<4){
      this.passorfail="Fail";
    }
    else{
      this.passorfail="Pass";
    }


      
  }

}
