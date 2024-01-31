import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent {
  @Output() stAdd: EventEmitter<Student> = new EventEmitter();

  constructor(private studentService: StudentsService) {}

  addStudent(name: string, age: number) {
    this.studentService.createStudent(name, age).subscribe(stu =>{
      this.stAdd.emit(stu);
    });
  }
}
