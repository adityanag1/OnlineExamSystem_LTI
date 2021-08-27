// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Question } from '../Models/question';
// import { NotificationService } from '../Services/notification.service';
// import { QuestionAddService } from '../Services/question-add.service';
// import { RemovequestionsService } from '../Services/removequestions.service';
// import { SearchService } from '../Services/search.service';

// @Component({
//   selector: 'app-remove-question',
//   templateUrl: './remove-question.component.html',
//   styleUrls: ['./remove-question.component.css']
// })
// export class RemoveQuestionComponent implements OnInit {

//   techList?:any;
//   questions: Question[] = []
//   subjIds: any = [];

//   constructor(public service: RemovequestionsService, 
//     private searchservice:SearchService, 
//     private questionService: QuestionAddService,
//     private notifyService: NotificationService,
//     public route: Router
//     ) { }

//   ngOnInit(): void {
//     this.getallTechList();
//     this.getQuestions();
//   }

//   showToasterSuccess() {
//     this.notifyService.showSuccess("Questions deleted successfully for the selected subject !!", "")
//   }

//   showToasterError() {
//     this.notifyService.showError("No Questions available for the selected subject !!", "")
//   }

//   getQuestions() {
//     this.questionService.getAll().subscribe((data: Question[]) => {
//       console.log(data);
//       this.questions=data;
//       for(let i=0; i<this.questions.length; i++) {
//         this.subjIds.push(this.questions[i]['subjectid']);
//         console.log("----------------")
//         console.log(this.subjIds);
//       }
//     })
    
//   }

//   deleteQuestions() {
//     if(this.subjIds.includes("1")) {
//         this.service.delete("Java").subscribe();
//         this.showToasterSuccess();
//         this.route.navigateByUrl("/AdminHome")
//     }
//     else if(this.subjIds.includes("2")) {
//       this.service.delete("SQL").subscribe();
//       this.showToasterSuccess();
//       this.route.navigateByUrl("/AdminHome")
//     }
//     else if(this.subjIds.includes("3")) {
//       this.service.delete("PHP").subscribe();
//       this.showToasterSuccess();
//       this.route.navigateByUrl("/AdminHome")
//     }
//     else if(this.subjIds.includes("4")) {
//       this.service.delete("Cplus").subscribe();
//       this.showToasterSuccess();
//       this.route.navigateByUrl("/AdminHome")
//     }
//     else if(this.subjIds.includes("5")) {
//       this.service.delete("Python").subscribe();
//       this.showToasterSuccess();
//       this.route.navigateByUrl("/AdminHome")
//     }
//     else if(this.subjIds.includes("6")) {
//       this.service.delete("Csharp").subscribe();
//       this.showToasterSuccess();
//       this.route.navigateByUrl("/AdminHome")
//     }
//     else {
//       this.showToasterError();
//       this.route.navigateByUrl("/AdminHome")
//     }
//   }

//   getallTechList(){
//     this.searchservice.getTechnologyList().subscribe((data)=>{
//     console.log(data)
//     this.techList=data
//     console.log(this.techList)})

//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../Models/question';
import { NotificationService } from '../Services/notification.service';
import { QuestionAddService } from '../Services/question-add.service';
import { RemovequestionsService } from '../Services/removequestions.service';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.css']
})
export class RemoveQuestionComponent implements OnInit {

  techList?:any;
  questions: Question[] = []
  subjIds: any = [];

  constructor(public service: RemovequestionsService, 
    private searchservice:SearchService, 
    private questionService: QuestionAddService,
    private notifyService: NotificationService,
    public route: Router
    ) { }

  ngOnInit(): void {
    this.getallTechList();
    this.getQuestions();
  }

  showToasterSuccess() {
    this.notifyService.showSuccess("Questions deleted successfully for the selected subject !!", "")
  }

  showToasterError() {
    this.notifyService.showError("No Questions available for the selected subject !!", "")
  }

  getQuestions() {
    this.questionService.getAll().subscribe((data: Question[]) => {
      console.log(data);
      this.questions=data;
      for(let i=0; i<this.questions.length; i++) {
        this.subjIds.push(this.questions[i]['subjectid']);
        console.log("----------------")
        console.log(this.subjIds);
      }
    })
    
  }


  deleteQuestions(subjectName: string) {
    if(subjectName=="Java") {
      if(this.subjIds.includes("1")) {
        this.service.delete(subjectName).subscribe();
        this.subjIds.splice(this.subjIds.indexOf("1"), 1);  
        this.showToasterSuccess();
        this.route.navigateByUrl("/AdminHome")
      } else {
        this.showToasterError();
      this.route.navigateByUrl("/AdminHome")
      }
    }
    else if(subjectName=="SQL") {
      if(this.subjIds.includes("2")) {
        this.service.delete(subjectName).subscribe();
        this.subjIds.splice(this.subjIds.indexOf("1"), 1);  
        this.showToasterSuccess();
        this.route.navigateByUrl("/AdminHome")
      } else {
        this.showToasterError();
      this.route.navigateByUrl("/AdminHome")
      }
    }
    else if(subjectName=="PHP") {
      if(this.subjIds.includes("3")) {
        this.service.delete(subjectName).subscribe();
        this.subjIds.splice(this.subjIds.indexOf("1"), 1);  
        this.showToasterSuccess();
        this.route.navigateByUrl("/AdminHome")
      } else {
        this.showToasterError();
      this.route.navigateByUrl("/AdminHome")
      }
    }
    else if(subjectName=="Cplus") {
      if(this.subjIds.includes("4")) {
        this.service.delete(subjectName).subscribe();
        this.subjIds.splice(this.subjIds.indexOf("1"), 1);  
        this.showToasterSuccess();
        this.route.navigateByUrl("/AdminHome")
      } else {
        this.showToasterError();
      this.route.navigateByUrl("/AdminHome")
      }
    }
    else if(subjectName=="Python") {
      if(this.subjIds.includes("5")) {
        this.service.delete(subjectName).subscribe();
        this.subjIds.splice(this.subjIds.indexOf("1"), 1);  
        this.showToasterSuccess();
        this.route.navigateByUrl("/AdminHome")
      } else {
        this.showToasterError();
      this.route.navigateByUrl("/AdminHome")
      }
    }
    else if(subjectName=="Csharp") {
      if(this.subjIds.includes("6")) {
        this.service.delete(subjectName).subscribe();
        this.subjIds.splice(this.subjIds.indexOf("1"), 1);  
        this.showToasterSuccess();
        this.route.navigateByUrl("/AdminHome")
      } else {
        this.showToasterError();
      this.route.navigateByUrl("/AdminHome")
      }
    }
    // if(this.subjIds.includes("2")) {
    //   this.service.delete("SQL").subscribe();
    //   this.subjIds.splice(this.subjIds.indexOf("2"), 1);  
    //   this.showToasterSuccess();
    //   this.route.navigateByUrl("/AdminHome")
    // }
    // if(this.subjIds.includes("3")) {
    //   this.service.delete("PHP").subscribe();
    //   this.subjIds.splice(this.subjIds.indexOf("3"), 1);  
    //   this.showToasterSuccess();
    //   this.route.navigateByUrl("/AdminHome")
    // }
    // if(this.subjIds.includes("4")) {
    //   this.service.delete("Cplus").subscribe();
    //   this.subjIds.splice(this.subjIds.indexOf("4"), 1);  
    //   this.showToasterSuccess();
    //   this.route.navigateByUrl("/AdminHome")
    // }
    // if(this.subjIds.includes("5")) {
    //   this.service.delete("Python").subscribe();
    //   this.subjIds.splice(this.subjIds.indexOf("5"), 1);  
    //   this.showToasterSuccess();
    //   this.route.navigateByUrl("/AdminHome")
    // }
    // if(this.subjIds.includes("6")) {
    //   this.service.delete("Csharp").subscribe();
    //   this.subjIds.splice(this.subjIds.indexOf("6"), 1);  
    //   this.showToasterSuccess();
    //   this.route.navigateByUrl("/AdminHome")
    // }
    else {
      this.showToasterError();
      this.route.navigateByUrl("/AdminHome")
    }
  }

  getallTechList(){
    this.searchservice.getTechnologyList().subscribe((data)=>{
    console.log(data)
    this.techList=data
    console.log(this.techList)})

  }

}
