import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddFileComponent } from './add-file/add-file.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ExamInstructionsComponent } from './exam-instructions/exam-instructions.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamendComponent } from './examend/examend.component';
import { ExamstartComponent } from './examstart/examstart.component';
import { FAQComponent } from './faq/faq.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { ReportComponent } from './report/report.component';
import { SearchComponent } from './search/search.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'Register', component: RegistrationComponent},
  {path: 'ExamList', component: ExamListComponent},
  {path:'ForgotPassword',component:ForgotpasswordComponent,},
  {path:'UserDashboard',component:UserdashboardComponent,},
  {path:"Exam",component:ExamstartComponent},
  {path:"ExamInstructions",component:ExamInstructionsComponent},
  {path:"ExamEnd",component:ExamendComponent},
  {path:"FAQ",component:FAQComponent},
  {path:"Profile",component:ProfileComponent},
  {path:"AboutUs",component:AboutUsComponent},
  {path:"AdminLogin",component:AdminLoginComponent},
  {path:"AdminHome",component:AdminHomeComponent},
  {path:"AddFile",component:AddFileComponent},
  {path:"RemoveFile",component:RemoveQuestionComponent},
  {path:"Search",component:SearchComponent},
  {path:"Report",component:ReportComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent,LoginComponent, RegistrationComponent,ExamListComponent,ForgotpasswordComponent]