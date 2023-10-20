import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FoolerComponent } from './layout/fooler/fooler.component';
import {MaterialModuleModule} from '../app/material-module/material-module.module'
import { SplashPageComponent } from './splash-page/splash-page.component';
import { HomeComponent } from './home/home.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SignInComponentComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {AppRoutingModule} from '../app/app-routing.module'
import { FormsModule,ReactiveFormsModule ,FormControl,FormGroup} from '@angular/forms';
import { NewDocumentComponent } from './new-document/new-document.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FilePickupComponent } from './file-pickup/file-pickup.component';
import {} from '../app/app-routing.module';
import { AddCustomComponent } from './add-custom/add-custom.component';
import {NgxPrintModule} from 'ngx-print';
import {HttpClientModule} from '@angular/common/http';
import { RackComponent } from './rack/rack.component';
import { CustomHomePageComponent } from './custom-home-page/custom-home-page.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ErrorComponent } from './error/error.component'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FoolerComponent,
    SplashPageComponent,
    ProgressBarComponent,
    SignInComponentComponent,
    SignUpComponent,
    NewDocumentComponent,
    ProfileComponent,
    InvoiceComponent,
    FilePickupComponent,

    HomeComponent,
     AddCustomComponent,
     RackComponent,
     CustomHomePageComponent,
     MakePaymentComponent,
     ErrorComponent
  ],
  imports: [
    BrowserModule,
    MaterialModuleModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
