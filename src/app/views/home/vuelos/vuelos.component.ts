import { Component, OnInit } from '@angular/core';
import { DATA_VUELOS } from 'src/app/data/vuelos.data';
import { IVuelo } from 'src/app/interfaces/vuelo';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {
  vuelos: IVuelo[] = [];

  constructor() { }

  ngOnInit() {
    this.vuelos = DATA_VUELOS
  }

}
