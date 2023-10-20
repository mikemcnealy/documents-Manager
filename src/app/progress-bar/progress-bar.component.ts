import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit{
  status:string=''
  Good:string='#009900';
  Low:string='#FFBF00'
  Danger:string='#FF0000';

  constructor() { }

  @Input()public capacity:number=0

  onstructor() { }

  ngOnInit(): void {
    if(this.capacity<=70){
      this.status = this.Good;
    }else if (this.capacity<=80){
      this.status =this.Low
    }else if (this.capacity>80){
      this.status =this.Danger
    }
  }



}
