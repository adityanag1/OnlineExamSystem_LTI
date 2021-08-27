import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Exam } from '../Models/exam';
import { Question } from '../Models/question';
import { Subject } from '../Models/subject';
import { QuestionService } from '../Services/question.service';
import { Subscription, interval } from 'rxjs';
import { SubjectService } from '../Services/subject.service';
import { ExamService } from '../Services/exam.service';
import { LoginService } from '../Services/login-service.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-examstart',
  templateUrl: './examstart.component.html',
  styleUrls: ['./examstart.component.css'],
})
export class ExamstartComponent implements OnInit, OnDestroy {
  //COUNTER
  public subscription!: Subscription;
  totalmarks: number = 0;
  public dateNow = new Date();
  public dDay: Date = new Date();
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;
  isValid: boolean = true;
  public timeDifference!: number;
  public secondsToDday!: number;
  public minutesToDday!: number;
  public hoursToDday!: number;
  public daysToDday!: number;
  public isTimesUp: boolean = false;
  public answerarray: number[] = [];
  public examtime: number = 0;
  ConForm!: FormGroup;

  public getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    // console.log(this.timeDifference);
    this.allocateTimeUnits(this.timeDifference);

    this.secondsToDday = Math.floor(
      (this.timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (this.timeDifference /
        (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (this.timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday = Math.floor(
      this.timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
    this.isTimesUp =
      this.secondsToDday == 0 &&
      this.minutesToDday == 0 &&
      this.hoursToDday == 0 &&
      this.daysToDday == 0;

    if (
      this.secondsToDday == 0 &&
      this.minutesToDday == 0 &&
      this.hoursToDday == 0 &&
      this.daysToDday == 0
    ) {
      this.timesup();
    }
  }

  public allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  timesup() {
    console.log("Time's up");
    this.submit();
  }

  //QUESTION
  OptionForm: any;

  constructor(
    private formbuilder: FormBuilder,
    public service: QuestionService,
    public examservice: ExamService,
    public router: Router,
    public service1: SubjectService,
    public service2: LoginService
  ) {
    for (let i = 0; i < 16; i += 1) {
      this.answerarray.push(0);
      // this.level1marks.push(0);
      // this.level2marks.push(0);
      // this.level3marks.push(0);
    }
    if (this.counter == 14) {
      this.isValid = false;
    }
  }
  counter: number = 0;
  questions: Question[] = [];
  // level1marks: number[] = [];
  // level2marks: number[] = [];
  // level3marks: number[] = [];
  selectedoption!: string;
  option1!: string;
  option2!: string;
  option3!: string;
  option4!: string;
  question!: string;
  selected!: string;
  marks1: number = 0;
  marks2: number = 0;
  marks3: number = 0;
  level: string = '1';
  cutoff: number = 4;
  levelmarksarray: number[] = [];
  nextAllowed: boolean = true;
  prevAllowed: boolean = false;
  levelstring: string = 'Level 1';
  id: number = 0;
  ID: string = '';
  isEmpty:boolean = false;
  // exam:Exam = new Exam(1,0,'',0,0,0,'');
  subjectname: string = '';
  username: string = '';
  

  ngOnInit(): void {
   
    // console.log('USER ID');
    // console.log(Number(sessionStorage.getItem('userid')));

    console.log("Session subjectid")
    console.log(sessionStorage.getItem('subjectid'))
    console.log("Session userid")
    console.log(sessionStorage.getItem('userid'))

    this.service1
      .getSubjectById(String(sessionStorage.getItem('subjectid')))
      .subscribe((data: Subject) => {
        this.subjectname = data.subjectName;
        console.log(this.subjectname);
      });

    this.service2.getUser(Number(sessionStorage.getItem('userid'))).subscribe((data: User) => {
      this.username = data.name;
      console.log(this.username);
    });

    // this.exam.dateOfExam = '';

    // this.exam.subjectid='';
    // this.exam.level1Marks=0;
    // this.exam.level2Marks=0;
    // this.exam.level3Marks=0;

    // console.log('History');
    // console.log(history.state.name);
    // console.log(history.state.duration);
    // console.log(history.state.subjectid);
    // console.log('ExamStartUserID');
    // console.log(Number(sessionStorage.getItem('userid')));
    // this.id = history.state.subjectid;
    // this.exam.userId = Number(sessionStorage.getItem('userid'));
    // this.exam.dateOfExam = String(this.dateNow);

    console.log(this.id + ' is the id');
    this.ID = String(sessionStorage.getItem('subjectid'));
    let minutes = String(sessionStorage.getItem('duration')).substring(3, 5);
    var m: number = +minutes;
    console.log(minutes);
    let date: Date = new Date();

    this.dDay.setMinutes(date.getMinutes() + m);


    console.log(this.dDay);
    this.service1.getSubject().subscribe((res) => {});

    this.OptionForm = new FormGroup({
      option: new FormControl(''),
    });

    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
      if (
        this.secondsToDday == 0 &&
        this.minutesToDday == 0 &&
        this.hoursToDday == 0 &&
        this.daysToDday == 0
      ) {
        this.timesup();
      }
    });

    this.service.getAll().subscribe((data: Question[]) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].subjectid == this.ID) {
          this.questions.push(data[i]);
        }
      }

      if (this.questions.length==0) this.isEmpty = true;
      console.log(this.isEmpty);

      console.log(this.questions);
      this.question = this.questions[0].questionDesc;
      this.option1 = this.questions[0].option1;
      this.option2 = this.questions[0].option2;
      this.option3 = this.questions[0].option3;
      this.option4 = this.questions[0].option4;
      this.level = this.questions[0].questionLevel;
    });
  }

  nextQuestion(): void {
    this.prevAllowed = true;
    // this.selected = this.OptionForm.value['option'];

    if (this.counter < this.questions.length) {
      this.nextAllowed = true;
      this.counter += 1;
      console.log('Counter: ' + this.counter);
      this.question = this.questions[this.counter].questionDesc;
      this.option1 = this.questions[this.counter].option1;
      this.option2 = this.questions[this.counter].option2;
      this.option3 = this.questions[this.counter].option3;
      this.option4 = this.questions[this.counter].option4;
      this.level = this.questions[this.counter].questionLevel;

      console.log('Selected');
      console.log(this.selected);
        console.log('Correct Answer');
        console.log(this.questions[this.counter - 1].correctAnswer);

      if (this.questions[this.counter].questionLevel == '1') {
        this.levelstring = 'Level 1';
      }
      if (this.questions[this.counter].questionLevel == '2') {
        this.levelstring = 'Level 2';
      }
      if (this.questions[this.counter].questionLevel == '3') {
        this.levelstring = 'Level 3';
      }

      if (
        this.questions[this.counter].questionLevel == '1' &&
        this.questions[this.counter + 1].questionLevel == '2'
      ) {
        this.levelstring = 'Level 2 about to start';
      }
      if (
        this.questions[this.counter].questionLevel == '2' &&
        this.questions[this.counter + 1].questionLevel == '3'
      ) {
        this.levelstring = 'Level 3 about to start';
      }
      if (
        this.questions[this.counter].questionLevel == '2' &&
        this.questions[this.counter - 1].questionLevel == '1'
      ) {
        this.prevAllowed = false;
        if (this.selected == this.questions[this.counter-1].correctAnswer) {
          this.answerarray[this.counter - 1] = 1;
          this.marks1 += 1;
          this.totalmarks += 1;
        }
        if (this.marks1 >= this.cutoff) {
          console.log('level 1 marks: ', this.marks1);
          // this.exam.level1Marks = this.marks1;
          this.levelstring =
            'Congratulations! Level 1 passed, Level 2 has started';
        }
        if (this.marks1 < this.cutoff) {
          // this.exam.level1Marks = this.marks1;
          this.submit();
        }
      }
      else if (
        this.questions[this.counter].questionLevel == '3' &&
        this.questions[this.counter - 1].questionLevel == '2'
      ) {
        this.prevAllowed = false;
        console.log('Selected');
        console.log(this.selected);
        console.log('Correct Answer');
        console.log(this.questions[this.counter - 1].correctAnswer);
        // if (this.selected == this.questions[this.counter-1].correctAnswer) {

        //   this.answerarray[this.counter - 1] = 1;
        //   // this.marks2 += 1;
        //   this.totalmarks += 1;
        // }

        if (this.marks2 >= this.cutoff) {
          // this.exam.level2Marks = this.marks2;
          console.log('level 2 marks: ', this.marks2);
          this.levelstring =
            'Congratulations! Level 2 passed, Level 3 has started';
        }
        if (this.marks2 < this.cutoff) {
          // this.exam.level2Marks = this.marks2;
          this.submit();
        }
        console.log(this.answerarray);
      }

     

      if (this.selected == this.questions[this.counter - 1].correctAnswer) {
        this.answerarray[this.counter - 1] = 1;
        if (this.questions[this.counter].questionLevel == '1') {
          this.marks1 += 1;
          this.totalmarks += 1;
        }
        if (this.questions[this.counter].questionLevel == '2') {
          this.marks2 += 1;
          this.totalmarks += 1;
        }
        if (this.questions[this.counter].questionLevel == '3') {
          this.marks3 += 1;
          this.totalmarks += 1;
        }
        console.log(this.answerarray);
      }
      if (this.selected != this.questions[this.counter - 1].correctAnswer) {
        this.answerarray[this.counter - 1] = 0;
        console.log(this.answerarray);
      }
    }
    if (this.counter == this.questions.length - 1) {
      this.nextAllowed = false;
      console.log('level 3 about to end');
      // if (this.selected == this.questions[this.counter - 1].correctAnswer) {
      //   this.answerarray[this.counter - 1] = 1;
      //   this.marks3 += 1;
      // }
    }
  }

  changeOption(e: any, option: string) {
    console.log("changeoption wala option")
    this.selected = option;
    console.log("This.selected");
    console.log(this.selected);
  }

  getOption(option:string) {
    this.selected = option;
    console.log("getoption wala option")
    console.log(this.selected)
  }

  previousQuestion(): void {
    this.selected = this.OptionForm.value['option'];
    this.counter -= 1;
    if (
      this.questions[this.counter].questionLevel == '2' &&
      this.questions[this.counter - 1].questionLevel == '1'
    ) {
      this.prevAllowed = false;
    }
    if (
      this.questions[this.counter].questionLevel == '3' &&
      this.questions[this.counter - 1].questionLevel == '2'
    ) {
      this.prevAllowed = false;
    }

    this.question = this.questions[this.counter].questionDesc;
    this.option1 = this.questions[this.counter].option1;
    this.option2 = this.questions[this.counter].option2;
    this.option3 = this.questions[this.counter].option3;
    this.option4 = this.questions[this.counter].option4;
    this.level = this.questions[this.counter].questionLevel;
    console.log('Counter: ' + this.counter);
  }
  
  submit() {
    // this.selected = this.OptionForm.value['option'];

    console.log(this.counter);
    if (this.selected == this.questions[this.counter].correctAnswer) {
      console.log('Selected');
      console.log(this.selected);
      console.log('Correct Answer');
      console.log(this.questions[this.counter].correctAnswer);
      this.answerarray[this.counter] = 1;

      if (this.questions[this.counter].questionLevel == '1') {
        this.marks1 += 1;
        this.totalmarks+=1;
        
      }
      else if (this.questions[this.counter].questionLevel == '2') {
        this.marks2 += 1;
        this.totalmarks+=1;
        
      }
      else{
        console.log("Last question")
        this.totalmarks+=1;
        
      }
      // this.totalmarks+=1;
      
             // this.exam.level3Marks = this.marks3;
      // this.exam.subjectid = this.ID;
    } else {
      this.answerarray[this.counter] = 0;
    }
    console.log('Total marks');
      console.log(this.totalmarks);
      this.marks3 = this.totalmarks - (this.marks1 + this.marks2);
      console.log("level 3 marks")
      console.log(this.marks3)
      // if (this.marks3!=0) {
      //   this.marks3 = this.marks3-1; }
      // else{
      //   this.marks3 = 0;
      // }
    console.log(this.answerarray);
    console.log(this.totalmarks);
    console.log('Exam Data to be posted');
    // console.log(this.exam);
    // console.log(JSON.stringify(this.exam));
    this.ConForm = this.formbuilder.group({
      userId: Number(sessionStorage.getItem('userid')),
      subjectid: sessionStorage.getItem('subjectid'),
      level1Marks: [this.marks1],
      level2Marks: [this.marks2],
      level3Marks: [this.marks3],
      dateOfExam: [String(this.dateNow)],
    });
    this.examservice.postExam(this.ConForm.value).subscribe((res) => {
      console.log(res);
    });
    this.router.navigateByUrl('/ExamEnd', {
      state: {
        level1marks: this.marks1,
        level2marks: this.marks2,
        level3marks: this.marks3,
        subjectname: this.subjectname,
        username: this.username,
        dateofexam: this.ConForm.value.dateOfExam,
      },
    });
  }

  calculatemarks() {
    console.log('inside calculatemarks');
    console.log(this.counter);
    let correctcount = 0;
    for (let i = 0; i < this.counter + 1; i++) {
      this.answerarray[i];
      if (this.answerarray[i] == 1) {
        correctcount += 1;
      }
    }
    this.totalmarks = correctcount;
  }
}
