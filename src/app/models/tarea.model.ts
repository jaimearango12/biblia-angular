export class Tarea{
    titulo: string;
    descripcion: string;
    completa: boolean; //si no lo pongo como parametro en el constructor cuando la declare 
                       // TODAS tendran el mismo valor en esta caso true o false
    
    constructor(pTitulo = '', pDescripcion=''){
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.completa = false;
    }
}