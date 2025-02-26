import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {

  @Input() producto!: Producto;

  constructor( private router: Router) {}

  editarProducto(id: number){
    // Pasamos el ID en la URL
    this.router.navigate(['/editar', id]);
  }


}
