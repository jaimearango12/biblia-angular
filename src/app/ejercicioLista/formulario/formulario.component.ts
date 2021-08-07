import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { Productoz } from '../../models/lista.model';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class Formulario2Component implements OnInit {
  @Output() productoCreado: EventEmitter<Productoz>;
  
  nuevoProducto: Productoz;
  

  constructor() { 
  this.nuevoProducto = new Productoz();
  this.productoCreado = new EventEmitter;
  }

  ngOnInit(): void {
  }
  
  onClick(){
      this.productoCreado.emit(this.nuevoProducto)
      this.nuevoProducto = new Productoz();
  }
}
