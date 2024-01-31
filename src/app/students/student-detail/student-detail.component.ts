import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnChanges {
  @Input() id = -1;
  student$: Observable<Student> | undefined;
  @Output() selected: EventEmitter<Student> = new EventEmitter();

  constructor(private studentService: StudentsService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.student$ = this.studentService.getStudent(this.id);
  }

  select() {
    this.selected.emit();
  }
  changeAge(newAge: number) {
    this.studentService.updateAge(this.id, newAge).subscribe((i) => {
      if (i === 1) {
        this.student$ = this.studentService.getStudent(this.id);
      }
    });
  }
}
