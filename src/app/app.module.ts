import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercico2CronometComponent } from './ejercico2-cronomet/ejercico2-cronomet.component';
import { Ejercico3CalculadComponent } from './ejercico3-calculad/ejercico3-calculad.component';
import { FormularioComponent } from './ejercico/formulario/formulario.component';
import { ListaComponent } from './ejercico/lista/lista.component';
import { ListaProductosComponent } from './ejercicoCaja/lista-productos/lista-productos.component';
import { ComandaComponent } from './ejercicoCaja/comanda/comanda.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercico2CronometComponent,
    Ejercico3CalculadComponent,
    FormularioComponent,
    ListaComponent,
    ListaProductosComponent,
    ComandaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
