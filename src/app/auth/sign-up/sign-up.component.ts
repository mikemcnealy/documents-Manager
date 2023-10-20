import { User } from './../../model/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleType } from '../../model/roleEnums';
import {AuthService} from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
//import {role} from '../../model/roleEnums'



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})

export class SignUpComponent {
   RegisterForm = new FormGroup({
    username:new FormControl(''),
    email:new FormControl(' '),
    password:new FormControl(''),
    confrimPassword:new FormControl('')
   })
  constructor(private db:AuthService,private router:Router) {}

   register(){

    let user = {} as User;
    user.id =1;
    user.roleID = RoleType.Customer;
    user.accountStatusID =1;
    user.name ="";
    user.password ="";

   // this.db.addNewUser(user)

   }
   logIn(user:string,password:string){
    alert('mike')
     user="wwmike";
     password
    this.db.logIN(user,password)
   }

   //////////////

   type:string ="password";
   visibility:string="visibility_off"
   isText:boolean =false;
   hide = true;
   //eyeIcon:string ="fa-eye-slash";
   hideShowPass(){
     //visibility_off
     this.isText =!this.isText;
     this.isText ? this.visibility ="visibility":this.visibility="visibility_off";
     this.isText ? this.type ="text":this.type ="password"

     //this.
   }

   LogIn(user:string,password:string){

    //user="wwmike";
    //password

    this.db.logIN(user,password)
     this.router.navigateByUrl('/home');
    // this.ref.close();
   }
   onSubmitRegister(){
      this.db.IsUserRegister(this.RegisterForm.value.email??'').subscribe((result)=>{
        console.log('===================mike===============')
        console.log(result)
      })
    //   alert(r)
    //     if(this.db.IsUserRegister(this.RegisterForm.value.email??'')){
    //   alert('user already Register')
    //   return
    // }
   this.RegisterForm.value.username??'',
    this.RegisterForm.value.email??'',
    this.RegisterForm.value.password??''
    let user = {} as User;
    user.id =1;
    user.roleID = RoleType.Customer;
    user.accountStatusID =1;
    user.name =this.RegisterForm.value.username??'';
    user.email = this.RegisterForm.value.email??'';
    user.password =this.RegisterForm.value.password??'';
     //console.log(user)
   this.db.registerNewUser(user)

   }
  }

