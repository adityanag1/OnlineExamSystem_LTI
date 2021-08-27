import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../Services/subject.service';
import { Subject } from '../Models/subject';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  ExamForm!: FormGroup;

  constructor( public service : SubjectService,public router: Router) {}
  subjectlist : string[] = [];
  imgurl:string='../../assets/yellow/';
  png:string = '.png';
  exam:string = '';
  java:string = "Java";
  python:string = "Python";
  c:string = "Cplus";
  csharp:string = "Csharp";
  php:string = "PHP";
  sql:string = "SQL";

  name : string='';
  duration:string='';
  subjectid:string='';
  userid:number = 0;
  
  ngOnInit(): void {
    console.log("UserId");
    console.log(Number(sessionStorage.getItem('userid')));


    this.service.getSubject().subscribe((res: Subject[]) => {
     
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.subjectlist.push(res[i].subjectName);
        console.log(this.imgurl+res[i].subjectName+this.png);
        // this.imgurllist.push("assets/yellow/"+res[i].subjectName+".png");
      
        
      }

     
     
  
 
    });
    this.ExamForm = new FormGroup({      
      exam: new FormControl(''),

      
      
    });   


  }
  changeOption(e:any) {
    console.log(e.target.value);
    

  }

  TakeExam(subject:string){
    console.log(subject);
    this.service.getSubjectById(subject).subscribe((data: Subject)=>{
      console.log("User ID in Exam List")
      console.log(Number(sessionStorage.getItem('userid')))
      console.log(data.subjectName);
      console.log(data.examDuration);
      console.log(data.subjectid);
      this.name = data.subjectName;
      this.userid = Number(sessionStorage.getItem('userid'));
      this.duration = data.examDuration;
      this.subjectid=data.subjectid;
      sessionStorage.setItem('subjectid',this.subjectid);  
  
    sessionStorage.setItem('name',this.name); 
    sessionStorage.setItem('duration', this.duration); 

      

      //{ state: { name:data.subjectName,duration:data.examDuration,subjectid:data.subjectid,userid:Number(sessionStorage.getItem('userid')) } }

      this.router.navigateByUrl('/ExamInstructions');
    });
    

  }
  Dashboard(){
    this.router.navigateByUrl('/UserDashboard', { state: { userid:Number(sessionStorage.getItem('userid')) } });
  }
  Profile(){
    this.router.navigateByUrl('/Profile', { state: { userid:Number(sessionStorage.getItem('userid'))}});
  } 
  ExamList(){
    this.router.navigateByUrl('/ExamList', { state: {userid:Number(sessionStorage.getItem('userid'))}});
  } 
  FAQ(){
    this.router.navigateByUrl('/FAQ', { state: { userid:Number(sessionStorage.getItem('userid'))}});
  }

}
