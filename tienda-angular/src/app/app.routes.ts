import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [

  {path: '', component: ListadoProductosComponent},
  {path: 'listado', component: ListadoProductosComponent}, 
  {path: 'agregar', component: FormularioComponent}, 
  {path:'editar/:key', component: FormularioComponent}, 
  {path: '**', component: ErrorComponent} //Para manejar el error de una ruta no encontrada

];
