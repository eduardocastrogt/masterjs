import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() elementos: string = "Soy el valor por defecto";
  @Input() size: string;


  constructor() { }

  ngOnInit() {
    console.log(this.elementos);
  }

}
