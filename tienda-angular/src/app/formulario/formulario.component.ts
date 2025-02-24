import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService) {}

  agregarProducto(evento: Event) {
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
    this.productoService.agregarProducto(producto);

    // Limpiamos los campos del formulario
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
