import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { DetalleComponent } from "./ejercicioEcritores/detalle/detalle.component";
import { ListaEscritoresComponent } from "./ejercicioEcritores/lista-escritores/lista-escritores.component";
import { FormiComponent } from "./ejercicioForm/formi/formi.component";
import { ListaEmpleadosComponent } from "./ejercicioForm/lista-empleados/lista-empleados.component";

const routes: Routes = [
    //Lista Escritores
    /*
    {path: '', pathMatch: 'full', redirectTo: '/escritores'},
    {path: 'escritores', component: ListaEscritoresComponent},
    {path: 'escritores/:escritorId', component: DetalleComponent},
    {path: '**', redirectTo: '/escritores'}
    */

    //Ejercicio formulario
    {path: '', pathMatch:'full', redirectTo: '/list'},
    {path: 'new',component: FormiComponent},
    {path: 'list', component:ListaEmpleadosComponent},
    {path: '**', redirectTo: '/list'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

