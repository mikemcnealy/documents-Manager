import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
   isLogin!:boolean
   rolID!:number
  constructor() { }
}
