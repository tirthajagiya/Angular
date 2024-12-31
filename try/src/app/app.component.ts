import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Student Management</h2>
      
      <!-- Single Input Box -->
      <div style="margin-bottom: 20px;">
        <input
          [(ngModel)]="inputValue"
          placeholder="Enter student name"
          style="width: 300px; padding: 5px;"
        />
        <button
          (click)="editingIndex === null ? addStudent() : saveStudent()"
          style="margin-left: 10px; padding: 5px 10px;"
        >
          {{ editingIndex === null ? 'Add Student' : 'Save Changes' }}
        </button>
        <button
          *ngIf="editingIndex !== null"
          (click)="cancelEdit()"
          style="margin-left: 10px; padding: 5px 10px; background-color: #f44336; color: white;"
        >
          Cancel
        </button>
      </div>

      <!-- Student List -->
      <ul style="list-style-type: none; padding: 0;">
        <li
          *ngFor="let student of students; let i = index"
          style="margin: 10px 0; display: flex; align-items: center;"
        >
          <span style="flex: 1;">{{ student }}</span>
          <button (click)="editStudent(i)" style="margin-right: 10px;">Edit</button>
          <button (click)="deleteStudent(i)" style="background-color: #f44336; color: white;">Delete</button>
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  students: string[] = ['John', 'Alice', 'Bob', 'Daisy']; // List of students
  inputValue: string = ''; // Input value for add/edit
  editingIndex: number | null = null; // Tracks the index of the student being edited

  // Add a new student
  addStudent(): void {
    if (this.inputValue.trim()) {
      this.students.push(this.inputValue.trim());
      this.inputValue = ''; // Clear the input box
    }
  }

  // Edit an existing student
  editStudent(index: number): void {
    this.editingIndex = index; // Set editing mode
    this.inputValue = this.students[index]; // Load the current name into the input box
  }

  // Save the edited student
  saveStudent(): void {
    if (this.inputValue.trim()) {
      this.students[this.editingIndex!] = this.inputValue.trim(); // Update the student name
      this.cancelEdit(); // Exit editing mode
    }
  }

  // Cancel editing
  cancelEdit(): void {
    this.editingIndex = null; // Clear editing mode
    this.inputValue = ''; // Reset input value
  }

  // Delete a student
  deleteStudent(index: number): void {
    this.students.splice(index, 1); // Remove student from the list
    if (this.editingIndex === index) {
      this.cancelEdit(); // Cancel edit if deleting the currently edited student
    }
  }
}

// Bootstrap the standalone component
bootstrapApplication(AppComponent).catch((err) => console.error(err));
