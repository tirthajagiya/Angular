import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Faculty';
  faculty = [
    {
      img: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
      name: "Arjun Bala",
      dept: "Computer"
    },
    {
      img: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/335---01-05-2024-07-40-49.JPG",
      name: "Dharmik Vasiyani",
      dept: "Computer"
    },
    {
      img: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/12---28-04-2023-02-06-51.jpg",
      name: "Firoz Sherasiya",
      dept: "Computer"
    }
  ]

  deleteStudent(i: any) {
    this.faculty.splice(i, 1)
  }

  isValid: boolean = false

  inputValid() {
    this.isValid = true
  }

  tempObj = {
    img: "",
    name: "",
    dept: ""
  }

  addFaculty() {
    this.faculty.push({ ...this.tempObj })
    this.tempObj.img = "";
    this.tempObj.name = "";
    this.tempObj.dept = ""
    this.isValid = false;
  }

  editStudent(i:any) {
    
  }
}
