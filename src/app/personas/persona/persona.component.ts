import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  nombre: string = 'Alex';
  edad: number = 39;

  obtenerNombre(): string {
    return this.nombre;
  }

  cambiarNombre(): void {
    this.nombre = 'Pedro';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }

}
