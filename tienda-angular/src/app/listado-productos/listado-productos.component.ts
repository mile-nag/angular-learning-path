import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProductoService } from '../producto.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    //Inicializar los productos
    this.productos = this.productoService.productos;

  }

  agregarProducto() {
    this.router.navigate(['/agregar']);
  }
}
