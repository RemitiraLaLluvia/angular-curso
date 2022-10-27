import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Capitan America'];
  heroeBorrado: string = '';

  BorrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';   
  }
}
