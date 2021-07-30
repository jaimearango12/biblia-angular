import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  @Input() num1: number;
  @Input() num2: number;

  resultado: number;
  

  constructor() { 
    this.num1 = 77;
    this.num2= 59;
    this.resultado= 0;
  }
      
  ngOnInit(): void {
    
  }
  
  suma(){
    this.resultado = this.numerador + this.denominador;
  }

  

 
}
