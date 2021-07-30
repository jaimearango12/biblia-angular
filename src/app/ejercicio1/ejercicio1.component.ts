import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  numerador: number;
  denominador: number;
  resultado: number;
  

  constructor() { 
    this.numerador = 77;
    this.denominador= 59;
    this.resultado= 0;
  }
      
  ngOnInit(): void {
    
  }
  
  suma(){
    this.resultado = this.numerador + this.denominador;
  }

  

 
}
