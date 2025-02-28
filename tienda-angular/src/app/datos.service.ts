import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url ='https://tienda-angular-909ba-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient) { }

  listarProductos() : Observable<{[key: string]: Producto}> {
    return this.httpClient.get<{[key: string]: Producto}>(this.url + 'datos.json');
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.httpClient.post(this.url + 'datos.json', producto);
  }

  modificarProducto(producto: Producto, key: string): Observable<any> {
    const url_modificar = `${this.url}datos/${key}.json`;
    return this.httpClient.put(url_modificar, producto); //actualiza el producto
  }

  eliminarProducto(key: string): Observable<any> {
    const url_eliminar = `${this.url}datos/${key}.json`;
    return this.httpClient.delete(url_eliminar); //elimina el producto
  }
}
