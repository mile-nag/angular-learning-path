import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: { [key: string]: Producto } = {};
  //Observable para notificar cambios en los productos
  productosActualizados = new Subject<{ [key: string]: Producto }>();

  constructor(private datosService: DatosService) {}

  listarProductos() {
    return this.datosService.listarProductos();
  }

  // Agregar o modificar un producto
  guardarProducto(producto: Producto, key: string | null = null) {
    if (key === null) {
      // Agregar un nuevo producto
      this.datosService.agregarProducto(producto).subscribe(() => {
        this.actualizarProductos();
      });
    } else {
      // Editar un producto existente
      this.datosService.modificarProducto(producto, key).subscribe(() => {
        this.actualizarProductos();
      });
    }
  }

  actualizarProductos() {
    this.listarProductos().subscribe(
      (productos: { [key: string]: Producto }) => {
        this.setProductos(productos);
      }
    );
  }

  setProductos(productos: { [key: string]: Producto }) {
    this.productos = productos;
    this.productosActualizados.next(this.productos); // permite emitir la actualizacion de la lista
  }

  getProductoByKey(key: string): Producto | undefined {
    return this.productos[key];
  }

  eliminarProducto(key: string) {
    this.datosService.eliminarProducto(key).subscribe(() => {
      this.actualizarProductos();
    });
  }
}
