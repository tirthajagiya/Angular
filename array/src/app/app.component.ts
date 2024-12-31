import { NgFor } from '@angular/common';
import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'array';

  student: string[] = ['a', 'b', 'c']

  border: number = 1;

  name: string = "";

  btnName: string = "Add"

  updatedIndex: number = -1

  addStudentName() {
    if (this.btnName == "Add") {
      if (this.name.trim() != "") {
        this.student.push(this.name)
        this.name = ""
      }
    }
    else if (this.btnName == "Update") {
      this.student[this.updateStudent]=
    }
  }

  deleteStudent(index: number) {
    this.student.splice(index, 1);
  }

  updateStudent(index: number) {
    this.name = this.student[index]
    this.btnName = "Update"
    this.updatedIndex=index
  }
}