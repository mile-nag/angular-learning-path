import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-tareas',
  imports: [],
  templateUrl: './lista-de-tareas.component.html',
  styleUrl: './lista-de-tareas.component.css'
})
export class ListaDeTareasComponent {
  tareas: string[] = [
    'Lavar ropa'
  ];

  agregarTarea(nuevaTarea: string): void{
    if (nuevaTarea){
      this.tareas.push(nuevaTarea);
    }
  }
}
