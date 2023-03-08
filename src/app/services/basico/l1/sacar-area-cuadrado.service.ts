import { Injectable , EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SacarAreaCuadradoService {
  sacarAreaCuadrado: EventEmitter<boolean>;
  constructor() {
    this.sacarAreaCuadrado= new EventEmitter();
  }
}
