import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  personas: string[] = ['Alex', 'Pedro', 'José', 'Juan', 'Rubén', 'Marco', 'Jean', 'Alonso'];
  personaEliminada: string = '';

  eliminarNombre() {
    this.personaEliminada = this.personas.shift() || '';
  }

}
