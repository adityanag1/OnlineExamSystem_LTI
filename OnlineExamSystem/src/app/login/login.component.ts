import { Component, OnInit, Input, Output,EventEmitter   } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';
import { LoginService } from '../Services/login-service.service';
import { Router,RouterModule } from '@angular/router';
import { NotificationService } from '../Services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {
  ConForm: FormGroup;
  public static loginid:number;
  userid:number=0;
  username: string = "";
  @Output() usernameEmitter = new EventEmitter<number>();
  

  

  constructor(public service: LoginService, public router: Router, private notifyService : NotificationService) { 
    
    this.ConForm = new FormGroup({
      
      emailid:new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      
      password: new FormControl('', Validators.compose([
	 	  Validators.minLength(5),
	 	 
	])),
      
      
   }
   
   //,{validators:any [this.checkPasswords, this.checkAge]},
    );

    
  }
  
  get password(){
    return this.ConForm.get("password");
  }
  get email(){
    return this.ConForm.get("email");
  }

  ngOnInit(): void {

  }
  showToasterSuccess() {
    this.notifyService.showSuccess("Logged In Successfully !!", "")
  }

  showToasterError() {
    this.notifyService.showError("Incorrect User Login !!", "")
  }

  onclick():void{
   
    console.log(this.ConForm.get("password")?.value);
    console.log(this.ConForm.get("emailid")?.value);
    console.log("hello");
    

    
    this.service.Login(this.ConForm.value).subscribe(res => {
    
      console.log('logged in'),
      console.log(res);
      console.log(JSON.stringify(res.userId));
      this.userid = res.userId;
      

      if (JSON.stringify(res).includes("Success")){

       
          this.showToasterSuccess()
          this.router.navigate(['/AdminHome']);
        
        
        this.service.getbyemail(this.ConForm.get("emailid")?.value).subscribe((data: User)=>{
          console.log(data);
          this.userid = data.userId;
          LoginComponent.loginid = this.userid;
        
          // { state: { userid:this.userid  } }
          this.router.navigateByUrl('/UserDashboard',);
          sessionStorage.setItem('userid', String(this.userid));   // localStorage.setItem('id', noOfClicks);
          // sessionStorage.setItem('userDetails', JSON.stringify(userDetails));   // if it's object
          console.log("Login userid")
          console.log(this.userid);
          
          
          
          
          
      }) 
        
        
       
       
      }
      else if(JSON.stringify(res).includes("Invalid")) {
        this.showToasterError();
      }
     
      //this.router.navigate(['/UserDashboard']);

     
    });

 

  }
}

