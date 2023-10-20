import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RoleType } from '../../model/roleEnums';
import { User } from '../../model/user';
import { environment } from '../../environment';
//import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterServiceService } from 'src/app/services/master-service.service';

//C:/Users/mike/AppData/Local/Microsoft/TypeScript/5.2/node_modules/@types/jsonwebtoken/index"

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-component.html',
  styleUrls: ['./sign-in-component.css'],
})
export class SignInComponentComponent implements OnInit {
  userList: any;

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private ref: MatDialogRef<SignInComponentComponent>,
    private router: Router,
    private auth: AuthService,
    private ms: MasterServiceService,
    private snackBar: MatSnackBar
  ) {
    this.userList = [];
    //this.userForm.
    //this.userForm.value.
  }
  ngOnInit(): void {}
  type: string = 'password';
  visibility: string = 'visibility_off';
  isText: boolean = false;
  hide = true;
  //eyeIcon:string ="fa-eye-slash";
  hideShowPass() {
    //visibility_off
    this.isText = !this.isText;
    this.isText
      ? (this.visibility = 'visibility')
      : (this.visibility = 'visibility_off');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  closepopup() {
    this.ref.close();
  }
  LogOut() {
    this.router.navigateByUrl('/');
  }
  LogIn() {
    this.auth
      .logIN(
        this.userForm.value.email ?? '',
        this.userForm.value.password ?? ''
      )
      .subscribe((result: any) => {
        this.userList = result;
        if (result.length > 0) {
          //user in the db need to create a token
          console.log(this.userList[0].roleID);
          if (this.userList[0]) {
            switch (this.userList[0].roleID) {
              case 1: {
                break;
                alert('admin');
              }
              case 2: {
                alert('Customer');
                break;
              }
              case 3: {
                alert('User');
                break;
              }
              case 4: {
                alert('powerUser');
                break;
              }
            }
          }
          this.auth
            .creatToken(
              this.userList[0].name,
              this.userList[0].email,
              RoleType.User
            )
            .subscribe((token: any) => {
              this.ms.isLogin = true;
              this.ms.rolID = this.userList[0].roleID;
              //let user = {} as token;
              let JWT = token;
              localStorage.setItem('token', JWT.token);
            });
            this.snackBar.open("User In")
          this.router.navigateByUrl('/home');
        } else {
          this.router.navigateByUrl('access-error');
        }

        //////////////////////////////
        console.log(result.length);
        console.log(result);
        this.userList = result;
        if (this.userList) {
        }
        //console.log('==========================')

        //  if(result.length>0){
        //
        console.log(this.userList[0]);
        //   this.router.navigateByUrl('/home');
        //  }
        //  else{
        //   alert('no data')
        //  }
      });
    this.ref.close();
  }
  verifyToken(token: string) {
    if (this.auth.isToken(environment.secretKey, token)) {
    } else {
    }
  }
}
