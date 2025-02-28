import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProductoService } from '../producto.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent {
  productos: { [key: string]: Producto } = {}; // Mapa de objetos o diccionario
  productosSuscripcion: Subscription | null = null; // Suscripcion a la lista de productos

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarProductos();

    // Suscribirse a los cambios en la lista de productos y actualizar
    this.productosSuscripcion =
      this.productoService.productosActualizados.subscribe((productos) => {
        this.productos = productos;
        this.productoService.setProductos(productos);
      });
  }

  cargarProductos() {
    this.productoService.listarProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }

  obtenerKeys(): string[] {
    if (this.productos) {
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto() {
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void {
    if (this.productosSuscripcion !== null) {
      this.productosSuscripcion.unsubscribe();
    }
  }
}
