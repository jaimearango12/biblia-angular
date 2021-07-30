import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercico2CronometComponent } from './ejercico2-cronomet/ejercico2-cronomet.component';
import { Ejercico3CalculadComponent } from './ejercico3-calculad/ejercico3-calculad.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercico2CronometComponent,
    Ejercico3CalculadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
