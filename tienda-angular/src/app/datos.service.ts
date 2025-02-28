import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url ='https://tienda-angular-909ba-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient,
    private loginService: LoginService) { }

  listarProductos() : Observable<{[key: string]: Producto}> {
    const token = this.loginService.getIdToken();
    const url_listar = `${this.url}datos.json?auth=${token}`;
    return this.httpClient.get<{[key: string]: Producto}>(url_listar);
  }

  agregarProducto(producto: Producto): Observable<any> {
  const token = this.loginService.getIdToken();
    const url_agregar = `${this.url}datos.json?auth=${token}`;
    return this.httpClient.post(url_agregar, producto);
  }

  modificarProducto(producto: Producto, key: string): Observable<any> {
  const token = this.loginService.getIdToken();
    const url_modificar = `${this.url}datos/${key}.json?auth=${token}`;
    return this.httpClient.put(url_modificar, producto); //actualiza el producto
  }

  eliminarProducto(key: string): Observable<any> {
    const url_eliminar = `${this.url}datos/${key}.json`;
    return this.httpClient.delete(url_eliminar); //elimina el producto
  }
}
