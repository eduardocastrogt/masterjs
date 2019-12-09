import {Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    /*Propiedades*/
    public title: string;
    public content: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        /*Asignando valores*/
        this.title = "Yo soy el primer componente";
        this.content = "Yo soy el contenido del componente";
        this.year = 2020;
        this.mostrarPeliculas = true;

        console.log('Yo soy el constructor del componente');
        console.log(this.title, this.content, this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}

