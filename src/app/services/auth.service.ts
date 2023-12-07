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
  jwtURL: string = 'http://localhost:5000';
  constructor(private db: HttpClient) {
     //t= new RoleType()
  }
  logIN(user: string, password: string) {
   // alert(user)
   // alert(password)
    //console.log(user+"  "+password)
    return this.db.get(`${this.jsonURL}/user?name=${user}&password=${password}`)
 }

 creatToken(user: string,email:string,roleID:number){
  let payload ={
    email:email,
    user:user,
    role:roleID
  }
  //alert(roleID)
  //return this.db.post(`/${this.jwtURL}/api/login`,`${payload}`)
 // return this.db.post
 //'http://localhost:5000/api/login
 //alert(RoleType.User.)
 return this.db.post(`${this.jwtURL}/api/login?role=${roleID}`,"")
 }

  registerNewUser(user: User) {
    if(this.IsUserRegister(user.name,)){
        //alert('user `${user.name}` Already Register')
    }else{
      let userData ={
        roleID:user.roleID,
        name:user.name,
        email:user.email,
        //crated:Date.now,
        password:user.password
      }
      this.db.post<User>(`${this.jsonURL}/user`,userData).subscribe((data) => {
        console.log(data)
      });
    }
  }

  IsUserRegister(userName:string){
  //alert(userName)
 return this.db.get(`${this.jsonURL}/user?name=${userName}`)
}
storeToken(tokenValue:string){
  localStorage.setItem('token',tokenValue)
}
isLoggedIn():boolean{
 return !! localStorage.getItem('token')
}
getToken(){
  return localStorage.getItem('token')
}

////////////////////////
  isToken(secretKey:string,token:string):boolean{
    return false
  }
}
