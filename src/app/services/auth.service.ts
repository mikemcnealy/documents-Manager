//import { RoleType } from './../role-type';
import { RoleType } from './../model/roleEnums';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token!: any;
  user!: User;
  users = {} as User;

  jsonURL: string = 'http://localhost:3000';
  jwtURL: string = 'http://localhost:5000/api/login';
  constructor(private db: HttpClient) {
     //t= new RoleType()
  }
  logIN(user: string, password: string) {
    return this.db.get(`${this.jsonURL}/user?name=${user}&password=${password}`)
 }

 creatToken(user: string,email:string,roleID:number){
  let payload ={
    email:email,
    user:user,
    role:roleID
  }
  return this.db.post(`${this.jwtURL}`,`${payload}`)
 }
  addNewUser(user: User) {
   
    this.db.post('url/user', user).subscribe((data) => {});
  }

  isToken(secretKey:string,token:string):boolean{
    return false
  }
}
