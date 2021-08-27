import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './Services/login-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { MatListModule} from '@angular/material/list';

import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ExamstartComponent } from './examstart/examstart.component';
import { ExamInstructionsComponent } from './exam-instructions/exam-instructions.component';
import { ExamendComponent } from './examend/examend.component';
import { FAQComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { ToastrModule } from 'ngx-toastr';
import { AddFileComponent } from './add-file/add-file.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { SearchComponent } from './search/search.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ExamListComponent,
    AdminHomeComponent, 
    ForgotpasswordComponent,
    HomeComponent,
    UserdashboardComponent,
    ExamstartComponent,
    ExamInstructionsComponent,
    ExamendComponent,
    FAQComponent,
    ProfileComponent,
    AboutUsComponent,
    AdminLoginComponent,
    AddFileComponent,
    RemoveQuestionComponent,
    SearchComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    RouterModule,
    NgxCsvParserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
   
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
