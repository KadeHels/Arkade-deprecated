import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GravityCalcComponent } from './components/gravity-calc/gravity-calc.component';
import { LoginComponent } from './components/login/login.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GravityCalcComponent,
    LoginComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
