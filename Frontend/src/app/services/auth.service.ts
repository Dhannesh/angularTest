import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: User){
    let UserArray = [];
    let users = localStorage.getItem('Users');
    if(users){
      UserArray = JSON.parse(users);
    }
    return UserArray.find((p:User) => p.email === user.email && p.password === user.password);//.find(p=>p.email === user.email && p.password === user.password);
  }
}
