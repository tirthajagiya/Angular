import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  student = {
    Name: "",
    Contact_Number: "",
    Sem: "",
    Spi: ""
  }

  project: any = {
    Project_Name:"",
    Project_Id:"",
    Project_Title:""
  }
  projects: any = []

  setStudentData(e: any) {
    this.student = { ...this.student, [e.target.name]: e.target.value }
  }

  setProjectData(e: any) {
    this.project = { ...this.project, [e.target.name]: e.target.value }
  }

  addProjectData(e: any) {
    this.projects.push(this.project)
  }
}