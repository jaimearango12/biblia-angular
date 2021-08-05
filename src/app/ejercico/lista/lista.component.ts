import { Component, OnInit , Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];
  

  constructor() { 
   this.tareas = [] 
  }

  ngOnInit(): void {
  }
  
  onClick(pTarea: Tarea){
    pTarea.completa = !pTarea.completa
  }

  onBorrar(indice: any){
    this.tareas.splice(indice, 1)
  }


}
