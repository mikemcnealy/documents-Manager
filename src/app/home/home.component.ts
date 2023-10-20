import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import {FilePickupComponent}from '../file-pickup/file-pickup.component'
import  {document} from'../model/document';
import {DocumentService} from '../services/document.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   record:any;
   model:any
   list:string[]=[]

   constructor(private router:Router
    ,private dialog:MatDialog,
    private db:DocumentService

    ){}

    //private ref:MatDialogRef<FilePickupComponent>
  ngOnInit(): void {
    //this.db.
    this.db.getAllWarehousebt("Warehouse").subscribe((data)=>{
     this.record = data
    })
  }
  search(){
    alert('you call')
   //let d  = <[]>this.record
   
    //let dialogRef = this.dialog.open(FilePickupComponent,{panelClass: 'ustom-modalbox'})

  }
  DocAction(index:number,action:string){
    //alert(index)
    let dialogRef = this.dialog.open(FilePickupComponent,{panelClass: 'ustom-modalbox'})

  }
  Customer(index:number,CustomerAction:string){

  }
  faPOpenopUp(popUp:string,id:number){

    if(popUp ==="Schedule File pickup")
    {

      let dialogRef = this.dialog.open(FilePickupComponent,{panelClass: 'faPopUp-dialog-1',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title:popUp
      }})    }else if(popUp ==="invoicePrint")
    {

    }
   // alert(popUp)
   // alert(id)

  //  console.log("=================mike=========")
  //  console.log(this.record[id])

if(this.record[id]){
 // alert(this.record[id])
}
  }
  navigate(page:string){
    if(page){
      this.router.navigateByUrl(page);
    }
  }
}
