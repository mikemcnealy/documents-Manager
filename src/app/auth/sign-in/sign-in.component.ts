import { Component ,OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import{RoleType} from '../../model/roleEnums';
import {User} from '../../model/user';
import {environment} from '../../environment'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-component.html',
  styleUrls: ['./sign-in-component.css']
})
export class SignInComponentComponent implements OnInit {
  userList:any;
  userForm!:FormGroup;

   //userForm:FormGroup;
  // userForm = new FormGroup({
  //   user: new FormControl(null),
  //   password: new FormControl(null)
  // })

  constructor(private ref:MatDialogRef<SignInComponentComponent>,private router:Router,private auth:AuthService){
    this.userList=[];
    this.userForm = new FormGroup({
      username: new FormControl("mmmmmm"),
      password: new FormControl("111111")
    })
  }
  ngOnInit(): void {

  }
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
  }
  closepopup(){
    this.ref.close()
  }
  LogOut(){
    this.router.navigateByUrl('/');

  }
  LogIn(){
    alert('')
    //alert(this.sgnInForm.controls.user.value)
    //console.log(this.sgnInForm.controls)
    this.auth.logIN('wwmike','mike123').subscribe((result:any)=>{

      this.userList = result
      if(this.userList){
     }
        // console.log(this.userList[0])
        // console.log(this.userList[0].name)
        // console.log(this.userList[0].roleID)
        // console.log(this.userList[0].LastLogIn)
      //let s=<User>user
      console.log('==========================')

     if(result.length>0){
      this.auth.creatToken(this.userList[0].name,this.userList[0].name,this.userList[0].roleID).subscribe((result:any)=>{
       // 'token'
        localStorage.removeItem('token')
        localStorage.setItem('token-mm', result.token);
        console.log(result.token)
       // let d= localStorage.getItem('token-mm')
        //console.log(d)
      })
      this.router.navigateByUrl('/home');
     }
     else{
      alert('no data')
     }

    })
    this.ref.close();


  }
 verifyToken(token:string){
  if(this.auth.isToken(environment.secretKey,token)){

  }else{

  }
 }
}
