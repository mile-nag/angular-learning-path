import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  @Input() producto!: Producto;
}
