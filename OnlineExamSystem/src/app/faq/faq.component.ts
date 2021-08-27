import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../Services/subject.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor(public service : SubjectService,public router: Router) { }

  ngOnInit(): void {

    console.log("FAQ USERID");
    console.log(Number(sessionStorage.getItem('userid')));
   
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
    console.log("FAQ userid");
    console.log(Number(sessionStorage.getItem('userid')))
  }

}
