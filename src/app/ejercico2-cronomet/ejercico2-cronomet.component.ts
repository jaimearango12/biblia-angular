import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cronomet',
  templateUrl: './ejercico2-cronomet.component.html',
  styleUrls: ['./ejercico2-cronomet.component.css']
})
export class Ejercico2CronometComponent implements OnInit {
  
  @Input() inicio: any;
  retro: number;

  @Output() terminaConteo : EventEmitter <string>;

  constructor() { this.retro = 10;
                  this.terminaConteo= new EventEmitter()}

  ngOnInit(): void {
    this.retro = this.inicio ? this.inicio: 10;
  }
  
  temp(){
    let interval = setInterval(() => {
      this.retro--;
      if (this.retro < 0){
          clearInterval(interval);
          this.retro = this.inicio;
          this.terminaConteo.emit('Finaliza el conteo con el numero' + this.inicio)
      }
    },1000)
  }
}
