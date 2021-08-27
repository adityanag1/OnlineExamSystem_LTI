import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamendComponent } from './examend.component';

describe('ExamendComponent', () => {
  let component: ExamendComponent;
  let fixture: ComponentFixture<ExamendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
