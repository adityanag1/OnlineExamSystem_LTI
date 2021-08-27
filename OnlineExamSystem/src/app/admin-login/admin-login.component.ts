import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { NotificationService } from '../Services/notification.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  ConForm: FormGroup;
  model : any={};  

  constructor(public service: LoginService, public router: Router, private notifyService : NotificationService) { 
    
    this.ConForm = new FormGroup({
      Loginid:new FormControl('',[Validators.required]),
      Password: new FormControl('', [Validators.required]),  
   });
    
  }

  showToasterSuccess() {
    this.notifyService.showSuccess("Logged In Successfully !!", "")
  }

  showToasterError() {
    this.notifyService.showError("Incorrect User Login !!", "")
  }
  
  get Password() {
    return this.ConForm.get("Password");
  }
  get Loginid(){
    return this.ConForm.get("Loginid");
  }

  ngOnInit(): void {

  }

  onclick():void{
   
    console.log(this.ConForm.get("Password")?.value);
    console.log(this.ConForm.get("Loginid")?.value);
    
    
    this.service.Login(this.ConForm.value).subscribe(res => {
      console.log('Logged in'),
      console.log(res)
      console.log(JSON.stringify(res));
      if (JSON.stringify(res).includes("Success")) {
        this.showToasterSuccess()
        this.router.navigate(['/AdminHome']);
      } else if(JSON.stringify(res).includes("Invalid")) {
        this.showToasterError();
      }
     
    });

    

  }

}
