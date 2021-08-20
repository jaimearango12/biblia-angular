import { Component, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from '../../escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService:EscritoresService) { 
    this.arrEscritores= [];
  }

   async ngOnInit()/*: void*/ {
     // this.arrEscritores =  this.escritoresService.getAll();

    /*this.escritoresService.getAllPromise()
    .then(escritores =>{
      this.arrEscritores= escritores;
    })*/

    this.arrEscritores= await this.escritoresService.getAllPromise();
  }


  async onChange($event:any){
    console.log($event.target.value);
    if($event.target.value=== 'todos'){
      this.arrEscritores= await this.escritoresService.getAllPromise();
    }else{
    this.arrEscritores= await this.escritoresService.getByPais($event.target.value)
    }
  }
  

  
}
