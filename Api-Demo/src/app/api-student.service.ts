import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {

  constructor(private _http:HttpClient) {  }

  apiUrl = "https://66ee8cc33ed5bb4d0bf144d5.mockapi.io/StudentData/Student"

  getAll() {
    this._http.get(this.apiUrl)
  }
}