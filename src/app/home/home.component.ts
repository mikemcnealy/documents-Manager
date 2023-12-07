import { InvoiceComponent } from '../customer-Invoice/invoice/invoice.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FilePickupComponent } from '../file-pickup/file-pickup.component';
import { document } from '../model/document';
import { DocumentService } from '../services/document.service';
import { MakePaymentComponent } from '../make-payment/make-payment.component';
import { Router } from '@angular/router';

import { window } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  record: any;
  CustomerID!:number;
  model: any;
  list: string[] = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private db: DocumentService
  ) {}

  //private ref:MatDialogRef<FilePickupComponent>
  ngOnInit(): void {
    //this.db.
    this.db.getAllWarehousebt('Warehouse').subscribe((data) => {
      this.record = data;
    });
  }
  search() {
    alert('you call');
    //let d  = <[]>this.record

    //let dialogRef = this.dialog.open(FilePickupComponent,{panelClass: 'ustom-modalbox'})
  }
  DocAction(index: number, action: string) {
    //alert(index)
    let dialogRef = this.dialog.open(FilePickupComponent, {
      panelClass: 'ustom-modalbox',
    });
  }
  Customer(index: number, CustomerAction: string) {}
  faPOpenopUp(popUp: string, id: number) {
    if (popUp === 'Schedule File pickup') {
      let dialogRef = this.dialog.open(FilePickupComponent, {
        panelClass: 'faPopUp-dialog-1',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
        data: {
          title: popUp,
        },
      });
    } else if (popUp === 'invoicePrint') {
         this.CustomerID =id;
      let dialogRef = this.dialog.open(InvoiceComponent, {
        panelClass: 'faPopUp-dialog-1',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
        data: {
          title: popUp,
          CustomerID: this.CustomerID
        },
      });
    } else if (popUp === 'payment') {
      let dialogRef = this.dialog.open(MakePaymentComponent, {
        panelClass: 'faPopUp-dialog-1',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
        data: {
          title: popUp,
        },
      });
    }
    // alert(popUp)
    // alert(id) MakePaymentComponent

    //  console.log("=================mike=========")
    //  console.log(this.record[id])

    if (this.record[id]) {
      // alert(this.record[id])
    }
  }
  navigate(page: string) {
    if (page) {
      this.router.navigateByUrl(page);
    }
  }
}
