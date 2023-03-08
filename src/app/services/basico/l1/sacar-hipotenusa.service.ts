import { Injectable , EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SacarHipotenusaService {
  sacarHipotenusa: EventEmitter<boolean>
  constructor() {
    this.sacarHipotenusa= new EventEmitter();
  }
}
