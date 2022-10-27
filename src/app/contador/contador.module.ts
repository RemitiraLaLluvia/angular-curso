import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [             // <- Componentes
        ContadorComponent
    ],
    exports: [                  // <- Componentes públicos
        ContadorComponent
    ],                  
    imports: [
        CommonModule
    ]

})

export class ContadorModule
{

}