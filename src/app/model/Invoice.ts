import { NumberFormatStyle } from '@angular/common';

export interface Invoise {
  CustomID: number;
  InvoiceNumber: number;
  InvoiceDate:Date,
  BilledTo: string;
  address:string;
  State:string;
  City:string;
  Zip:string;
  Total:number,
  item: [];
}

export interface item {
  Price: Number;
  Description: string;
}
