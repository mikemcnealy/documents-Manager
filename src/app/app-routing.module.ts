import { RackComponent } from './rack/rack.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {SplashPageComponent} from '../app/splash-page/splash-page.component'
import { InvoiceComponent } from './invoice/invoice.component';
import { AddCustomComponent } from './add-custom/add-custom.component'
import { CustomHomePageComponent } from './custom-home-page/custom-home-page.component'

const routes: Routes =[
  {path:"",component:SplashPageComponent},
  {path:"home",component:HomeComponent},
  {path:'Invoice',component:InvoiceComponent},
  {path:'AddCustom',component:AddCustomComponent},
  {path:'AddRack',component:RackComponent},
  {path:'CustomHome',component:CustomHomePageComponent}
]


@NgModule({

  declarations: [],

  imports: [
    CommonModule,
    RouterModule,
    [RouterModule.forRoot(routes)]
  ],exports: [RouterModule]
})
export class AppRoutingModule { }
