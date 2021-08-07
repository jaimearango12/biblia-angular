import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercico2CronometComponent } from './ejercico2-cronomet/ejercico2-cronomet.component';
import { Ejercico3CalculadComponent } from './ejercico3-calculad/ejercico3-calculad.component';
import { FormularioComponent } from './ejercico/formulario/formulario.component';
import { ListaComponent } from './ejercico/lista/lista.component';
import { ListaProductosComponent } from './ejercicoCaja/lista-productos/lista-productos.component';
import { ComandaComponent } from './ejercicoCaja/comanda/comanda.component';
import { ListaproductosComponent } from './ejercicioLista/listaproductos/listaproductos.component';
import { Formulario2Component } from './ejercicioLista/formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercico2CronometComponent,
    Ejercico3CalculadComponent,
    FormularioComponent,
    ListaComponent,
    ListaProductosComponent,
    ComandaComponent,
    ListaproductosComponent,
    Formulario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
