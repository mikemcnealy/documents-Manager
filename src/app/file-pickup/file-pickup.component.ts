import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-file-pickup',
  templateUrl: './file-pickup.component.html',
  styleUrls: ['./file-pickup.component.css']
})
export class FilePickupComponent implements OnInit{
  inputdata:any
  hide = true;
  constructor(@Inject(MAT_DIALOG_DATA)public data:any){}

  ngOnInit(): void {
    this.inputdata =this.data
  }

}
