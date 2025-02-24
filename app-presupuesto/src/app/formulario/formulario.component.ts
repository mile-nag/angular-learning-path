import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EgresoService } from '../egreso/egreso.service';
import { IngresoService } from '../ingreso/ingreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  tipo: string = 'ingresoOperacion';

  descripcionInput: string | null = null;
  montoInput: number | null = null;

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}

  tipoOperacion(evento: Event) {
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }

  agregarMonto() {
    if (this.descripcionInput && this.montoInput) {
      if (this.tipo === 'ingresoOperacion') {
        this.ingresoServicio.ingresos.push(
          new Ingreso(this.descripcionInput, this.montoInput)
        );
      } else {
        this.egresoServicio.egresos.push(
          new Egreso(this.descripcionInput, this.montoInput)
        );
      }
    } else {
      console.log('No se ha ingresado un monto o descripción válido');
    }

    this.descripcionInput = '';
    this.montoInput = 0;
  }
}
