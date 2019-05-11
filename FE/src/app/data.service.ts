import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = "http://127.0.0.1:5000/"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getStadiums() {
    return this.http.get(this.BASE_URL)
  }
  addStadium(data: {}) {
    data = {
      "stadiumName": 'Sân '+ Date.now(),
      "stadiumOwner": 'Chủ sân ' + Date.now(),
      "price": 200
    }
    console.log(data)
    this.http.post(this.BASE_URL + 'add', data, this.httpOptions).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log("Error occured");
    })
  }
}