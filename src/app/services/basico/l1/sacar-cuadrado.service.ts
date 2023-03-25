import { Injectable , EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SacarCuadradoService {
  sacarCuadrado: EventEmitter<boolean>
  constructor() {
    this.sacarCuadrado= new EventEmitter();
  }
}
