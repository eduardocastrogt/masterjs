import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;
  public mostrarPeliculas: boolean;

  constructor() { 
    console.log('Yo soy el constructor');
    this.titulo = "Componente peliculas";
  }

  ngOnInit() {
    console.log('Yo hoy un Hook despues del constructor me ejecuto');
  }

  ngDoCheck(){
    console.log('Yo soy el docheck')
  }

  ngOnDestroy(){
    console.log('Yo soy ondestroy - me voy a eliminar');
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

}
