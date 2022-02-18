import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>

    <h3>La base es: {{base}}</h3>
    
    <button class="btn btn-primary btn-sm" (click)="acomulador(base)"> +{{base}}</button>
    
    <h3>{{numero}}</h3>
    <button class="btn btn-primary btn-sm" (click)="acomulador(-base)"> -{{base}} </button>
    
    `
})
export class ContadorComponent {

    public titulo: string = 'CONTADOR APP';
    public numero: number = 10;
    public base: number = 11;
  
    acomulador(valor: number): void {
      this.numero += valor;
    }
  

}