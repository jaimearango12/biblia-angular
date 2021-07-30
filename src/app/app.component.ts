import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTarea: Tarea[];

  constructor(){
    this.arrTarea = [];
  }

  onTareaCreada($event: any) { 
    this.arrTarea.push($event);
    
  }
 
}
