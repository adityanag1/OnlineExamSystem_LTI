import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamstartComponent } from './examstart.component';

describe('ExamstartComponent', () => {
  let component: ExamstartComponent;
  let fixture: ComponentFixture<ExamstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamstartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
