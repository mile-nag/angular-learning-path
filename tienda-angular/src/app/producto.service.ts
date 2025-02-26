import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
 

  // Variable para el ID 
  private idSiguiente = 1;

  productos: Producto[] = []
  
  constructor(){
    this.inicializarProductos();
  }

  private inicializarProductos() {
    const producto1 = new Producto(this.idSiguiente++,'Pantalón', 13000.0);
    const producto2 = new Producto(this.idSiguiente++,'Camisa', 8000.0);
    const producto3 = new Producto(this.idSiguiente++,'Remera', 5000.0);

    //Agregamos los productos al array
    this.productos.push(producto1, producto2, producto3);
  }

  // Agregar o modificar un producto
  guardarProducto(producto: Producto) {
    if (producto.id === null) {
      producto.id = this.idSiguiente++;
      this.productos.push(producto);
    } else {
      const indice = this.productos.findIndex((p) => p.id === producto.id);
      if (indice !== -1) {
        this.productos[indice] = producto;
      }
    }
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find((producto) => producto.id === id);
  }

  eliminarProducto(id: number) {
    const indice = this.productos.findIndex((p) => p.id === id);
    if (indice !== -1) {
      this.productos.splice(indice, 1);
    }
  }
}
