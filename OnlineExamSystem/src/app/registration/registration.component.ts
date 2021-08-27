// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import {HttpClient} from '@angular/common/http';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { RegisterService } from '../Services/register-service.service';
// import { User } from '../Models/user';


// //declare var grecaptcha: any;

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit {

//   datetest:any="2014-02-01";
//   student:any={};
//  isRegister: boolean = false;
//  isloginButton:boolean=false;
//   model: any={};


//   constructor(private router: Router,private http:HttpClient, public service: RegisterService) { 
    
//     this.ConForm = new FormGroup({
//       name:new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z]$')]),
//       email:new FormControl(null,[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
//       phonenumber: new FormControl(null,[Validators.required, Validators.pattern('^([7-9]{1}[0-9]{9})$')]),
//       dob: new FormControl("1999-12-12",[Validators.required]),
//       city: new FormControl(null,[Validators.required]),
//       state: new FormControl(null,[Validators.required]),
//       qualification: new FormControl(null,[Validators.required]),
//       yearofcompletion: new FormControl(null,[Validators.required]),
//       password1: new FormControl(null,[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
//       password2: new FormControl(null,[Validators.required]),
//    }
//    //,{validators:any [this.checkPasswords, this.checkAge]},
//     );
//   }

//   ngOnInit(): void {
//   }
//   //students?:Student[];
//   ConForm:FormGroup;

//   get password2(){
//     return this.ConForm.get("password2");
//   }

//   get password(){
//     return this.ConForm.get("password1");
//   }
  
//   get yearofcompletion(){
//     return this.ConForm.get("yearofcompletion");
//   }
//   get qualification(){
//     return this.ConForm.get("qualification");
//   }
//   get state(){
//     return this.ConForm.get("state");
//   }
//   get city(){
//     return this.ConForm.get("city");
//   }
//   get dob(){
//     return this.ConForm.get("dob");
//   }
//     get phonenumber(){
//     return this.ConForm.get("phonenumber");
//    }
//    get name(){
//      return this.ConForm.get("fullname");
//     }

//     get email(){
//      return this.ConForm.get("email");
//     }

   

//   //headers = new Headers({ 'Content-Type': 'application/json' });

//   resp?:string;

//   checkPasswords(group?: FormGroup) { // here we have the 'passwords' group
//   let pass = group?.get('password')?.value;
//   let confirmPass = group?.get('password2')?.value;

//   return pass === confirmPass ? null : { notSame: true }
// }


// checkAge(group?:FormGroup){
//   let date = group?.get('dob')?.value;
//   var dat = new Date();
//   var d = date.toString().split('-');

//   var g = new Date(dat.getFullYear(), dat.getMonth(), dat.getDay());
//   var g2 = new Date(d[0], d[1], d[2]);
//   var ans = Math.floor((Date.UTC(dat.getFullYear(), dat.getMonth(), dat.getDate()) - Date.UTC(d[0], d[1], d[2]) ) /(1000 * 60 * 60 * 24));
//   var dd = Math.floor(ans/365);
//   console.log(dd);

//   return (dd > 18) ? null :{notUp: true};
// }

// onclick():void{
   
  
//   console.log("hello register has been clicked");
  
//   this.service.Register(this.model).subscribe((data: User[])=>{
    
//     console.log(data)

    
// }) 
// }
// SubmitReg(){
// this.isloginButton = true;
//     console.log("heree");
//     this.student.StudentName = this.ConForm.value.name;
//     this.student.Email = this.ConForm.value.email;
//     this.student.Mobile_num = this.ConForm.value.phonenumber;
//     this.student.DOB = this.ConForm.value.dob;
//     this.student.City = this.ConForm.value.city;
//     this.student.State = this.ConForm.value.state;
//     this.student.Qualification = this.ConForm.value.qualification;
//     this.student.Year_of_Completion = this.ConForm.value.yearofcompletion;
//     this.student.Pwd = this.ConForm.value.password;
    

//     console.log(this.student);

//   //   var res = this.http.post("https://localhost:44338/student/post",JSON.stringify(this.student), {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {this.resp = res.toString();
//   //   if(res.toString() != "Error"){
//   //   this.isRegister = true;
//   //   }
//   //   else{
//   //     alert("Error in registering");
      
//   // this.router.navigateByUrl('/home',{skipLocationChange:true}).then(()=>{this.router.navigate(['register'])})
//   //   }

//   // })
//   //   .catch(err=> alert(err));
//   //   console.log("here "+this.resp);


//    }
// }



import { Component, OnInit } from '@angular/core';    
import { LoginService } from '../Services/login-service.service';

import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
import { User } from '../Models/user';
import { RegisterService } from '../Services/register-service.service';
import { Router } from '@angular/router';
import { NotificationService } from '../Services/notification.service';

@Component({    
  selector: 'app-registration',    
  templateUrl: './registration.component.html',    
  styleUrls: ['./registration.component.css']    
})    
export class RegistrationComponent implements OnInit { 
  
  data = false;    
  ConForm: any;    
  message:string | undefined;  
  model: any={};
  isRegister: boolean = false;
  isloginButton:boolean=false;
  
  constructor(private formbuilder: FormBuilder,public service: RegisterService, public router: Router, public getuser:LoginService, private notifyService : NotificationService) { }    

  ngOnInit() {  
    

    console.log("inside init function");
    this.ConForm = this.formbuilder.group({      
      name:['',[Validators.required]],
      emailid:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile: ['',[Validators.required, Validators.pattern('^([7-9]{1}[0-9]{9})$')]],
      state: ['',[Validators.required]],
      city: ['',[Validators.required]],
      dob: ["1999-12-12",[Validators.required]],
      qualification: ['',[Validators.required]],
      yearofcompletion: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]], 
   }); 
  
  } 
  showToasterSuccess() {
    this.notifyService.showSuccess("Registered Successfully !!", "Now login to your account")
  }
  showToasterError() {
    this.notifyService.showError("This user already exists", "")
  }
  toaster(error: any){
    this.notifyService.showError(error, "")
  }
  onclick():void{
    this.getuser.getbyemail(this.ConForm.value.emailid).subscribe(res=>{
      if (res!=undefined){
        this.showToasterError()
        console.log(res);
      }
   })  ;
    console.log(this.ConForm.value) ;
    this.service.create(this.ConForm.value).subscribe(res => {
      console.log('User created!');
      console.log(JSON.stringify(res));
      this.showToasterSuccess()
      this.router.navigate(['/Login']);
     
    }, error => {
      this.toaster("This mobile number already exists");
    });
    }  

    
      get password(){
        return this.ConForm.get("password");
      }
      
      get yearofcompletion(){
        return this.ConForm.get("yearofcompletion");
      }
      get qualification(){
        return this.ConForm.get("qualification");
      }
      get state(){
        return this.ConForm.get("state");
      }
      get city(){
        return this.ConForm.get("city");
      }
      get dob(){
        return this.ConForm.get("dob");
      }
        get mobile(){
        return this.ConForm.get("mobile");
       }
       get name(){
         return this.ConForm.get("name");
        }
    
        get emailid(){
         return this.ConForm.get("emailid");
        }
    
  
  
}     
//   data = false;    
//   ConForm: any;    
//   message:string | undefined;  
//   model: any={};
//   isRegister: boolean = false;
//   isloginButton:boolean=false;
  
//   constructor(private formbuilder: FormBuilder, public service: RegisterService, public router: Router) { }    

//   ngOnInit() {    
//     console.log("inside init function");
//     this.ConForm = this.formbuilder.group({      
//       name:['',[Validators.required, Validators.pattern('^[a-zA-Z]$')]],
//       emailId:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
//       mobile: ['',[Validators.required, Validators.pattern('^([7-9]{1}[0-9]{9})$')]],
//       state: ['',[Validators.required]],
//       city: ['',[Validators.required]],
//       dob: ["1999-12-12",[Validators.required]],
//       qualification: ['',[Validators.required]],
//       yearofcompletion: ['',[Validators.required]],
//       password: ['',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
    
//     });    
//   } 
//   onclick():void{
   
//     console.log(this.ConForm.value) ;
//     this.service.create(this.ConForm.value).subscribe(res => {
//       console.log('User created!');
//       console.log(JSON.stringify(res));
//       this.router.navigate(['/Login']);
     
//     });
//     }  
//   get password2(){
//         return this.ConForm.get("password2");
//       }
    
//       get password(){
//         return this.ConForm.get("password1");
//       }
      
//       get yearofcompletion(){
//         return this.ConForm.get("yearofcompletion");
//       }
//       get qualification(){
//         return this.ConForm.get("qualification");
//       }
//       get state(){
//         return this.ConForm.get("state");
//       }
//       get city(){
//         return this.ConForm.get("city");
//       }
//       get dob(){
//         return this.ConForm.get("dob");
//       }
//         get phonenumber(){
//         return this.ConForm.get("phonenumber");
//        }
//        get name(){
//          return this.ConForm.get("fullname");
//         }
    
//         get email(){
//          return this.ConForm.get("email");
//         }
    
  
  
// }    