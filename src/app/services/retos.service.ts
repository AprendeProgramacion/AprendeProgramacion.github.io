import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetosService {
  reto:EventEmitter<String>;
  retos =
  {
    "fundamentos":[
      {
        "nombre": "Nivel 1",
        "link": "/retos/fundamentos/nivel-1"
      },
      {
        "nombre": "Nivel 2",
        "link": "/retos/fundamentos/nivel-2"
      },
    ],
  }
  constructor() {
    this.reto = new EventEmitter();
  }
}
