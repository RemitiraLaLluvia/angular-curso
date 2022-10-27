import {Component} from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = "IronMan";
    edad: number = 45;

    get nombreMayusculas (): string {
        return this.nombre.toUpperCase();
    }

    ObtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
    }

    ObtenerNombreUpper(): string{
        return this.nombre.toUpperCase();
    }

    CambiarNombre (): void {
        this.nombre = "Spiderman";
    }

    CambiarEdad(): void{
        this.edad = 50;
    }
}