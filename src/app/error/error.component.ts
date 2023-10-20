import { Component, OnInit } from '@angular/core';
import {MasterServiceService} from '../services/master-service.service'
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  constructor(private ms:MasterServiceService){}
  ngOnInit(){
    this.ms.isLogin =false;
  }
}
