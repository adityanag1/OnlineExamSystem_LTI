import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { LoginService } from '../Services/login-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userId!: number;
  name!: string;
  qualification!: string;
  yearOfCompletion!: string;
  city!: string;
  state!: string;
  emailId!: string;
  mobile!: string;
  constructor(private httpService: HttpClient,private login: LoginService, private router: Router) { } 

  ngOnInit() {  
    this.login.getUser(Number(sessionStorage.getItem('userid'))).subscribe(data=>{
      
      //Logging the response recieved from web api.
      console.log(data);
      console.log(JSON.stringify(data));
      this.userId=data.userId;
      this.name=data.name;
      this.qualification=data.qualification;
      this.yearOfCompletion=data.yearOfCompletion;
      this.city=data.city;
      this.emailId=data.emailId;
      this.state=data.state;
      this.mobile=data.mobile;

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

