import {Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    template: `
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        <p>Year: {{year}}</p>
    `
})

export class MiComponente{

    /*Propiedades*/
    public title: string;
    public content: string;
    public year: number;

    constructor(){
        /*Asignando valores*/
        this.title = "Yo soy el primer componente";
        this.content = "Yo soy el contenido del componente";
        this.year = 2020;

        console.log('Yo soy el constructor del componente');
        console.log(this.title, this.content, this.year);
    }
}

