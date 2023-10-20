import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {permissions} from '../../app/model/permissions'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = new BehaviorSubject<permissions>({IsAdmin:false,IsSignIn:false,LoadData:false,LoadMenu:false,})
  $data = this.data.asObservable();

  constructor() { }
  editData(admin:boolean,signIn:boolean,showData:boolean,showMenu:boolean){
    this.data.next({IsAdmin:admin,IsSignIn:signIn,LoadData:showData,LoadMenu:showMenu})
 }
 
}
