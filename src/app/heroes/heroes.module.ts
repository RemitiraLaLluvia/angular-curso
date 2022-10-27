import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [             // <- Componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports: [                  // <- Componentes públicos
        ListadoComponent
    ],                  
    imports: [
        CommonModule
    ]

})

export class HeroesModule
{

}