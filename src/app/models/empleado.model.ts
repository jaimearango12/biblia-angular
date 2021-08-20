export class Empleado{
    nombre:string;
    apellidos:string;
    email:string;
    edad:number;
    departamento: string;
    password: string; 
    imagen:string

    constructor(pNombre:string='', pApellidos:string='',pEmail:string='', pEdad:number=0, pDepartamento: string='', 
        pPassword: string='', pImagen:string=''){
            this.nombre= pNombre;
            this.apellidos= pApellidos;
            this.email= pEmail;
            this.edad=pEdad;
            this.departamento=pDepartamento;
            this.password =pPassword; 
            this.imagen=pImagen
    }
}