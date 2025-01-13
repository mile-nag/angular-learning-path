import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalon', 130),
    new Producto('Camisa', 200),
    new Producto('Remera', 100),
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    if(this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0){
      console.log('Debe ingresar una descripción y un precio válido');
      return;
    }
    
    const producto = new Producto(this.descripcionInput, this.precioInput);

    this.productos.push(producto);

    this.descripcionInput ='';
    this.precioInput = null;
  }
}
