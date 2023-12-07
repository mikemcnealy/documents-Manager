import { item } from '../../model/Invoice';
import { Invoise } from '../../model/Invoice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  item: item;
  readonly:boolean =true
  Invoise: Invoise;
   //fruits = ["Banana", "Orange", "Apple", "Mango"];
  //customInvoise:any;
  customInvoise = new Array();
  InvoiseNumber =true;
   date:any;
  constructor() {
    var i = { item: '', id: Number };
    this.Invoise = {} as Invoise;
    this.item = {} as item;
  }
  ngOnInit(): void {

    let data:any
    this.customInvoise.push(
      this.Invoise.BilledTo="FNF",
      this.Invoise.address="12721 aylight TRL",
      this.Invoise.CustomID = 1,
      this.Invoise.InvoiceNumber = 345,
      this.Invoise.InvoiceDate = new Date('2024-04-06'),
      this.Invoise.BilledTo = 'FNFF',
      this.Invoise.Total = 1,
      this.item.Description = '',
      this.item.Price = 100.0
    )
  }
  CreateInvoice(){
    const today = new Date();

    this.date = (today.getMonth()+'/'+(today.getDay()+1)+'/'+today.getFullYear());

    this.readonly =!this.readonly
   this.InvoiseNumber = <any> Math.random().toFixed(4).replace("0.","")
  }
}
