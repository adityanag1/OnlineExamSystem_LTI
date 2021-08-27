import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionAddService } from '../Services/question-add.service';
import { Question } from '../Models/question';

import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { SearchService } from '../Services/search.service';
import { NotificationService } from '../Services/notification.service';


@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {

  csvRecords: any[] = [];
  sub: any;
  addForm: FormGroup
  subjectName!: string;
  techList?: any;
  headers = new Headers
  
  constructor(public service:QuestionAddService, 
    private notifyService : NotificationService, 
    private ngxCsvParser: NgxCsvParser, 
    private searchservice: SearchService,
    private route: Router
    ) {
    this.addForm=new FormGroup({
      filePath:new FormControl(null,[Validators.required]),
      subject:new FormControl('',[Validators.required]),
    })
   }
   showToasterSuccess() {
    this.notifyService.showSuccess("File Inserted Successfully !!", "")
  }

  showToasterError() {
    this.notifyService.showError("Something went wrong !!", "Please try again...")
  }

   @ViewChild('fileImportInput') fileImportInput: any;


   fileChangeListener($event: any): void {

    const files = $event.srcElement.files;

    this.ngxCsvParser.parse(files[0], {delimiter: ',' })
      .pipe().subscribe((result: any) => {
        console.log('Result', result);
        console.log(JSON.stringify(result))

        this.subjectName=this.addForm.value.subject;
        console.log("Subject selected: "+ this.subjectName);

        if(this.subjectName=="Java") {
          this.sub="1"
        }
        else if(this.subjectName=="SQL") {
          this.sub="2"
        }
        else if(this.subjectName=="PHP") {
          this.sub="3"
        }
        else if(this.subjectName=="Cplus") {
          this.sub="4"
        }
        else if(this.subjectName=="Python") {
          this.sub="5"
        }
        else if(this.subjectName=="Csharp") {
          this.sub="6"
        }

        // this.service.getByName(this.subjectName).subscribe((data)=>{
        //   this.sub=data
        // })

        console.log(this.sub)


        for(let i=0; i<result.length; i++) {
          result[i].subjectid=this.sub;
        }

        console.log(result)

        this.csvRecords = result;

        console.log("-------CSV Record--------")
        console.log(this.csvRecords);
      }, 
      (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    }

   

ngOnInit(): void {
  this.getallTechList();
}

getallTechList(){
  this.searchservice.getTechnologyList().subscribe((data)=>{
  console.log(data)
  this.techList=data
  console.log(this.techList)})

}

submitFile() {

  console.log("Posting API")

  this.service.PostQuestions(this.csvRecords).subscribe(res => {
    console.log(JSON.stringify(res));
    if(JSON.stringify(res).length>1) {
      this.showToasterSuccess()
      this.route.navigateByUrl('/AdminHome')
    }
    else {
      this.showToasterError()
    }
  });
}


get filePath(){
  return this.addForm.get("filePath")
}
get subject(){
  return this.addForm.get("subject")
}

}