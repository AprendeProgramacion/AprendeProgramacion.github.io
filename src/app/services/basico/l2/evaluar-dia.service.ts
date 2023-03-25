import { Injectable , EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluarDiaService {
  evaluarDia: EventEmitter<boolean>;
  constructor() {
    this.evaluarDia = new EventEmitter();
  }
}
