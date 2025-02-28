import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './login-guard.service';

export const routes: Routes = [
  { path: '', component: ListadoProductosComponent, canActivate : [LoginGuardService] },
  { path: 'listado', component: ListadoProductosComponent, canActivate : [LoginGuardService]  },
  { path: 'agregar', component: FormularioComponent, canActivate : [LoginGuardService]  },
  { path: 'editar/:key', component: FormularioComponent, canActivate : [LoginGuardService]  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }, //Para manejar el error de una ruta no encontrada
];
