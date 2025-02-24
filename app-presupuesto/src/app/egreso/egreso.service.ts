import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }

  egresos : Egreso[] = [
    new Egreso('Alquiler departamento', 900),
    new Egreso('Ropa', 200)
  ];

}
