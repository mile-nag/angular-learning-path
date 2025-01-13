import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeTareasComponent } from "./lista-de-tareas/lista-de-tareas.component";

@Component({
  selector: 'app-root',
  imports: [ListaDeTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista de tareas';
}
