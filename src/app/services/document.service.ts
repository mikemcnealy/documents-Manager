import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
url:string="http://localhost:3000/"
  constructor(private db:HttpClient) {}
  getAllCustomer(Customer:string){
    return this.db.get(this.url+`${Customer}`)
  }

  getAllWarehousebt(Warehouse:string){
    return this.db.get(this.url+`${Warehouse}`)
  }
  getWarehousebtID(id:number){
    return this.db.get(`${this.url}/${id}`)
  }
  updataWarehousebt(id:number,data:any){
    return this.db.put(this.url,`${this.url}/${id}`,data)
  }

  savaidWarehousebt(data:any){
    return this.db.post(this.url,data)
  }
  deletWarehousebt(id:number){
    return this.db.delete((`${this.url}/${id}`))
  }
}

