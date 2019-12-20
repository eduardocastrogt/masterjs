import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Pelicula } from '../../models/pelicula.model';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;
  public mostrarPeliculas: boolean;
  public peliculas: Pelicula[];
  public favorita: Pelicula;

  constructor() { 
    this.titulo = "Componente peliculas";

    this.peliculas = [
      new Pelicula('Spiderman 4', 2019, 'https://d1dxvryen9goi5.cloudfront.net/wp-content/uploads/2019/07/251.jpg'),
      new Pelicula('Los vengadores End Game', 2018, 'https://media.metrolatam.com/2019/03/26/avengersendgamepublinews-e6d565af92ca68592b8586ff3d3fec5e-1200x600.jpg'),
      new Pelicula('Batman vs Superman', 2016, 'https://i1.wp.com/lopezdoriga.com/wp-content/uploads/2015/04/batman-v-superman-the-underdog-story-i-believe-in-you1.jpeg'),
      new Pelicula('Spiderman 4', 2011, 'https://d1dxvryen9goi5.cloudfront.net/wp-content/uploads/2019/07/251.jpg')
    ];
  }

  ngOnInit() {
    console.log('Yo hoy un Hook despues del constructor me ejecuto');

    console.log(this.peliculas);
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

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
