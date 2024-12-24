import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
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
    
    setStudentData(e:any){
    this.student={...this.student,[e.target.name]:e.target.value}
  }
}
