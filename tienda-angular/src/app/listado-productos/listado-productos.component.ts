import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormularioComponent],
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService){}

  ngOnInit(){
    //Inicializar los productos
    this.productos = this.productoService.productos;
  }
}
