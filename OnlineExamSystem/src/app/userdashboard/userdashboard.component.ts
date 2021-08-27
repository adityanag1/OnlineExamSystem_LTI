import { Component, Input, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Exam } from '../Models/exam';
import {HttpClient} from '@angular/common/http';
import { ExamService } from '../Services/exam.service';
import { LoginService } from '../Services/login-service.service';
import { User } from '../Models/user';
import {Subject} from '../Models/subject';
import {LoginComponent} from '../login/login.component'
import { SubjectService } from '../Services/subject.service';

@Component({

  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
  
})
export class UserdashboardComponent implements OnInit {

  userid!: number;
  examId !: number;
  usersubjectlist : string[] = [];
  username: string = "";
  data :  User[] = [];
  noexams:boolean=false;
  examidlist : number[] = [];
  subjectid!:string;
  reportsubjectid!:string;

  constructor(public router: Router,public service1: ExamService,public service2:LoginService, public service3:SubjectService) { 
    
  }


 
  ngOnInit(): void {
    this.userid= Number(sessionStorage.getItem('userid'));
    console.log(Number(sessionStorage.getItem('userid')));
    
    console.log(this.noexams)
   
    this.service2.getUser(this.userid).subscribe((data: User) => {
      // console.log("User Data");
      console.log(data.name);
      
      console.log(data);
      this.username = data.name;
     
    });
  
    this.service1.getExam().subscribe((data: Exam[]) => {
     
      console.log(JSON.stringify(data));
      console.log("History userid");
      console.log(Number(sessionStorage.getItem('userid')));
      this.userid = Number(sessionStorage.getItem('userid'));
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        // console.log("User iD")
        // console.log(history.state.id);
        if (data[i].userId == Number(sessionStorage.getItem('userid'))){

          this.service3.getSubjectById(data[i].subjectid).subscribe(res => {
     
            console.log(res.subjectName);
            
            if ( this.usersubjectlist.includes(res.subjectName) == false) {
              this.usersubjectlist.push(res.subjectName);
              this.noexams=false;
            }
            
            console.log(this.usersubjectlist);
          
            this.userid= Number(sessionStorage.getItem('userid'));
            
            

          });
        }
        else if (this.usersubjectlist.length==0){
          this.noexams=true;
          console.log(this.noexams)
        } 
        else{
          this.noexams=false;
        } 
      }
    });
    console.log("Subjectlist")
    console.log(this.usersubjectlist);
   
   
    

    
    }
    //{ state: { userid:Number(sessionStorage.getItem('userid'))}}
    Dashboard(){
      this.router.navigateByUrl('/UserDashboard');
    }
    Profile(){
      this.router.navigateByUrl('/Profile' );
    } 
    ExamList(){
      this.router.navigateByUrl('/ExamList');
    } 
    FAQ(){
      this.router.navigateByUrl('/FAQ');
    }
    // Dashboard(){
    //   this.router.navigateByUrl('/UserDashboard', { state: { name:this.name,duration:this.duration,subjectid:this.subjectid,userid:Number(sessionStorage.getItem('userid')) } });
    // }
    ReportDetails(subject:string){
      switch(subject){
        case "Java": 
          this.reportsubjectid='1';
          break;
        case "SQL": 
          this.reportsubjectid='2';
          break;
        case "PHP": 
          this.reportsubjectid='3';
          break;
        case "Cplus": 
          this.reportsubjectid='4';
          break;
        case "Python": 
          this.reportsubjectid='5';
          break;
        case "Csharp": 
            this.reportsubjectid='6';
            break;


      }
      console.log("In Report Details")
      console.log(history.state.subjectid)
      this.service1.getExam().subscribe((res : Exam[] )=> {
        for (let i = 0; i < res.length; i++){
         
          if (res[i].userId == Number(sessionStorage.getItem('userid')) && res[i].subjectid == this.reportsubjectid){
            this.examidlist.push(res[i].examId);
          }
        }
        console.log(this.examidlist)
        for(let i = 0; i < res.length; i++){
          if (res[i].examId == this.examidlist[this.examidlist.length - 1]){
            console.log(res[i]);
            sessionStorage.setItem('examid',String(res[i].examId));
            sessionStorage.setItem('reportsubjectid',String(res[i].subjectid));
            sessionStorage.setItem('reportsubjectname',String(subject));
            sessionStorage.setItem('level1marks',String(res[i].level1Marks));
            sessionStorage.setItem('level2marks',String(res[i].level2Marks));
            sessionStorage.setItem('level3marks',String(res[i].level3Marks));
            sessionStorage.setItem('reportdateofexam',String(res[i].dateOfExam));
            break;
          }
        }

      });

    }


  

  

}
