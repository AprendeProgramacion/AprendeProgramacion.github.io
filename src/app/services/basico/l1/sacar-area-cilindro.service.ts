import { Injectable , EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SacarAreaCilindroService {
  sacarAreaCil: EventEmitter<boolean>
  constructor() {
    this.sacarAreaCil = new EventEmitter();
  }
}
