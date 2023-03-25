import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SacarDefinitivaService {
  sacarDefinitiva: EventEmitter<boolean>;
  constructor() {
    this.sacarDefinitiva = new EventEmitter();
  }
}
