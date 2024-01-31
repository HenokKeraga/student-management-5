import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  //students$: Observable<Student[]> | undefined;
  students: Student[] | undefined;
  selectedStudent: Student | undefined;

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    // this.students$ = this.studentService.getStudents();
    this.studentService.getStudents().subscribe((stds) => {
      this.students = stds;
    });
  }

  onSelected() {
    alert(`the selected student is ${this.selectedStudent?.name}`);
  }
  addOneStudent(student: Student) {
    console.log(student)
    this.students?.push(student)
  }
}
