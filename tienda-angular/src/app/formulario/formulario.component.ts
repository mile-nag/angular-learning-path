import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  keyProducto: string | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Suscribirse a la actualización de productos
    this.productoService.productosActualizados.subscribe((productos) => {
      const key = this.route.snapshot.paramMap.get('key');

      if (key) {
        const producto = this.productoService.getProductoByKey(key);
        if (producto) {
          this.keyProducto = key;
          this.descripcionInput = producto.descripcion;
          this.precioInput = producto.precio;
        }
      }
    });

    // Cargar productos si no están cargados
    this.productoService.actualizarProductos();
  }

  guardarProducto(evento: Event) {
    evento.preventDefault();
    //Validar que sean valores correcto
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);

    //Agregar el producto usando el servicio
    this.productoService.guardarProducto(producto, this.keyProducto);

    //Limpiamos los campos del formulario y redirigimos al inicio
    this.limpiarCampos();

    //Redirigir al inicio
    this.cancelar();
  }

  //Redirigir al inicio
  cancelar() {
    this.router.navigate(['/']);
  }

  eliminarProducto() {
    if (this.keyProducto != null) {
      this.productoService.eliminarProducto(this.keyProducto);
      this.limpiarCampos();
      this.cancelar(); // Redirige al listado (por ahora)
    }
  }

  //Limpiar los campos del formulario
  limpiarCampos() {
    this.keyProducto = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
