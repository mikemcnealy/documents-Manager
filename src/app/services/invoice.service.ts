import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private db:HttpClient) { }

  getInviceByCustomerID(ID:number){}
  getInviceByCustomerName(name:string){}
  createInvice(){}
  upDataInvice(){}
  getAllInvices(){}

 // getAllCustomer(){}
  //getCustomerByNane(){}
}

