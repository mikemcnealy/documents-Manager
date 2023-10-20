import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from '../services/auth.service'
import {DataService} from '../services/data-service.service';
//import {MatDialog} from '@angular/material/dialog';
import {SignInComponentComponent} from '../auth/sign-in/sign-in.component';
import {SignUpComponent} from '../auth/sign-up/sign-up.component'
import { MatDialog } from '@angular/material/dialog';
//import { MatDialog } from '@angular/material/dialog';
//MatDialog

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent implements OnInit{
  constructor(private service:DataService,private dialog:MatDialog,private Auth:AuthService) { }

  ngOnInit(): void {
  }
  hideShowPass(){

  }
  LogIn(){
    // if(this.Auth.logIN('user','password'))
    // {

    // }
    //this.service.logIN
    this.service.editData(false,true,false,false)
//this.dialog.open(SignInComponentComponent,{width:'60%'})
let dialogRef = this.dialog.open(SignInComponentComponent,{panelClass: 'ustom-modalbox'})
//dialogRef.addPanelClass
//dialogRef.close()
   }

   signUp(){
    let dialogRef = this.dialog.open(SignUpComponent,{panelClass: 'ustom-modalbox-Register'})

   }




}
