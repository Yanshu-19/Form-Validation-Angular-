import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpClient=inject(HttpClient);
  constructor() { }

  getUser(){
    return this.httpClient.get("http://localhost:3000/user")
  }
  addUser(user:any){
    return this.httpClient.post("http://localhost:3000/user",user);
  }
 
}
