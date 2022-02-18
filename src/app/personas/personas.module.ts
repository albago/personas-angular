import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
    declarations: [
        ListadoComponent,
        PersonaComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ListadoComponent
    ]
})
export class PersonasModule {}