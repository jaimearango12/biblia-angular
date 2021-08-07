import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Productoz } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {

  @Input() productoss: Productoz[];
  @Input() textoBoton: string;
  

  @Output() producta: EventEmitter<number>

  constructor() { 
    this.productoss = []
    this.producta = new EventEmitter();
    this.textoBoton ='';
  }

  ngOnInit(): void {
  }
  
  onClick(indice:number){
    this.producta.emit(indice);
  }
}
