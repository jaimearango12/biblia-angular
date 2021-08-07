import { Component } from '@angular/core';
import { Productoz } from './models/lista.model';
import { Producto } from './models/producto.model';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTarea: Tarea[];
  arrComida: Producto[];
  arrBebida: Producto[];

  productoSeleccionados: Producto[];
  prodSeleccionados: Productoz[];
  prodComprados: Productoz[];

  constructor(){
    // To-Do
    this.arrTarea = [];
    // Caja Registradora
    this.arrComida = [
      new Producto('Cocido', 'https://upload.wikimedia.org/wikipedia/commons/5/50/Cocido_boyaco.jpg' , 10.50),
      new Producto('Paella', 'https://www.hola.com/imagenes/cocina/recetas/20200917175530/paella-valenciana-clasica/0-866-670/paella-age-m.jpg' , 
      12.20),
      new Producto('Cachopo', 'https://crujienteyaldente.com/wp-content/uploads/2018/04/CACHOPO-1024x575.jpg' , 15.75),
      new Producto('Pizza', 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg' , 7.80),
      new Producto('Pasta', 'https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418-0.jpeg' , 6.90),
      new Producto('Hamburguesa', 'https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg' , 5.75),
    ];
    this.arrBebida = [
      new Producto('Coca Cola', 'https://coca-colafemsa.com/wp-content/uploads/2020/02/8-5.png' , 1.75),
      new Producto('Fanta', 'https://coca-colafemsa.com/wp-content/uploads/2020/02/5-5.png' , 1.60),
      new Producto('Cerveza', 'https://www.gastroactitud.com/wp-content/uploads/2019/10/Lexico-cervezas.jpg', 1.20),
      new Producto('Agua', 'https://mistiendas.com.co/licoreras-demo/7305-large_default/agua-cielo-botella-x-260-ml.jpg', 1.50)

    ];
    this.productoSeleccionados= [];
    this.prodSeleccionados = [];
    this.prodComprados = []
  }
  
  //To-Do
  onTareaCreada($event: any) { 
    this.arrTarea.push($event);
    
  }
  
  //Caja Registradora
  onProductoSeleecionado($event:any){
    //this.productoSeleccionados.push($event);
    const productoEncontrado = this.productoSeleccionados.find(producto => producto.nombre ===
      $event.nombre);

    if (productoEncontrado){
        productoEncontrado.cantidad++;
    }else{
      this.productoSeleccionados.push($event);
    }
  }
  
  //Lista Productos
  onProductoCreado($event:any){
      this.prodSeleccionados.push($event);
  }
  onProducrosSeleccionado($event:any){
    const prodo =this.prodSeleccionados.splice($event, 1)
    this.prodComprados.push(prodo[0]);
  
  }
  onPodNoSelec($event:any){
    const prodo =this.prodComprados.splice($event, 1)
    this.prodSeleccionados.push(prodo[0]);
  }
 
}
