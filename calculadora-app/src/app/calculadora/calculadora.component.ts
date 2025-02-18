import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ResultadoComponent } from "../resultado/resultado.component";

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, FormularioComponent, ResultadoComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  resultado: number = 0;

  procesarResultado(resultado: number) {
    this.resultado = resultado;
  }
}
