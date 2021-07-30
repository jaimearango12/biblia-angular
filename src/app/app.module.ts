import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercico2CronometComponent } from './ejercico2-cronomet/ejercico2-cronomet.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercico2CronometComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
