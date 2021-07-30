import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cronomet',
  templateUrl: './ejercico2-cronomet.component.html',
  styleUrls: ['./ejercico2-cronomet.component.css']
})
export class Ejercico2CronometComponent implements OnInit {
  
  retro: number;

  constructor() { this.retro = 10;}

  ngOnInit(): void {
  }
  
  temp(){
    let interval = setInterval(() => {
      this.retro--;
      if (this.retro===0){
          clearInterval(interval);
      }
    },1000)
  }
}
