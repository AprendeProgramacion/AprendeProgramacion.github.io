import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SacarModuloService {
  sacarModulo: EventEmitter<boolean>;
  constructor() {
    this.sacarModulo = new EventEmitter();
   }
}
