import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  operandoA: number | null = null;
  operandoB: number | null = null;

  @Output() resultadoSuma = new EventEmitter<number>()
  
  sumar() {
    if(this.operandoA && this.operandoB){
      const resultado = this.operandoA + this.operandoB
      this.resultadoSuma.emit(resultado)
    }
    else{
      console.log('Se deben introducir valores correctos.')
    }
  }
}
