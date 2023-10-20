import { environment } from './environment';
import { authGuard } from './Guard/auth.guard';
import { RackComponent } from './rack/rack.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {SplashPageComponent} from '../app/splash-page/splash-page.component'
import { InvoiceComponent } from './invoice/invoice.component';
import { AddCustomComponent } from './add-custom/add-custom.component'
import { CustomHomePageComponent } from './custom-home-page/custom-home-page.component'
import {ErrorComponent} from './error/error.component'


const routes: Routes =[
  {path:"",component:SplashPageComponent},
  {path:"home",component:HomeComponent},
  {path:'Invoice',component:InvoiceComponent},
  {path:'AddCustom',component:AddCustomComponent,canActivate:[authGuard]},
  {path:'AddRack',component:RackComponent,canActivate:[authGuard]},
  {path:'CustomHome',component:CustomHomePageComponent},
  {path:'access-error',component:ErrorComponent},
  {path:'**',component:ErrorComponent}
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
