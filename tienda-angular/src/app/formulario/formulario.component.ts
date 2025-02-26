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
  productoID: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Verificar si el producto ya existe
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const producto = this.productoService.getProductoById(Number(id));
      if (producto) {
        this.productoID = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
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

    const producto = new Producto(this.productoID, this.descripcionInput, this.precioInput);

    //Agregar el producto usando el servicio
    this.productoService.guardarProducto(producto);

    //Limpiamos los campos del formulario y redirigimos al inicio
    this.limpiarCampos();
    
    //Redirigir al inicio
    this.cancelar();
  }

  //Redirigir al inicio
  cancelar() {
    this.router.navigate(['/']);
  }

  eliminarProducto(){
    if (this.productoID){
      this.productoService.eliminarProducto(this.productoID);
      this.limpiarCampos();
      this.cancelar(); // Redirige al listado (por ahora)
    } 
  }

  //Limpiar los campos del formulario
  limpiarCampos(){
    this.productoID = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
