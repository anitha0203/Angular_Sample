import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  registerUser(user : User){
    const body : User = {
      UserName: user.UserName,
      Password: user.Password,
      CPassword: user.CPassword
    }
  }

}

