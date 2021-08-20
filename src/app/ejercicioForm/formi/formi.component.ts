import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../../empleados.service';

@Component({
  selector: 'app-formi',
  templateUrl: './formi.component.html',
  styleUrls: ['./formi.component.css']
})
export class FormiComponent implements OnInit {

  formNewEmpleado:FormGroup;

  constructor(
    private empleadoService: EmpleadosService
    ) {
    this.formNewEmpleado= new FormGroup({
      nombre: new FormControl('',[
        Validators.required
      ]),
      apellidos: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required
      ]),
      edad: new FormControl(''),
      departamento: new FormControl(''),
      password: new FormControl(''),
      imagen: new FormControl(''),
    }) ;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.empleadoService.insert(this.formNewEmpleado.valid)
  }

}
