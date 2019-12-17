import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombreparametro: string;
  public apellidoparametro: string;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.nombreparametro = params.nombre;
      this.apellidoparametro = params.apellido;
      console.log(params);
    });
  }

  redireccion(){
    this._router.navigate(['/formulario']);
  }

}
