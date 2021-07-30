import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './ejercico3-calculad.component.html',
  styleUrls: ['./ejercico3-calculad.component.css']
})
export class Ejercico3CalculadComponent implements OnInit {

  resultado: string;
  calculoFin: boolean;


  constructor() {
    this.resultado = '';
    this.calculoFin = false;
   }

  ngOnInit(): void {
  }
  
  onClick($event:  any){
      if(this.calculoFin){
        this.resultado = $event.target.innerText;
        this.calculoFin = false;
      }else{
        this.resultado += $event.target.innerText;
      }
  }

  onResult(){
    this.resultado = eval(this.resultado);
    this.calculoFin = true
  }
}
