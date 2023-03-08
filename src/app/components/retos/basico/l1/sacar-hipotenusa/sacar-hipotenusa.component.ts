import { Component } from '@angular/core';
import { SacarHipotenusaService } from 'src/app/services/basico/l1/sacar-hipotenusa.service';

@Component({
  selector: 'app-sacar-hipotenusa',
  templateUrl: './sacar-hipotenusa.component.html',
  styleUrls: ['./sacar-hipotenusa.component.css']
})
export class SacarHipotenusaComponent {
  sol:boolean = false;
  constructor(private sacarHipo: SacarHipotenusaService){}
  close(){
    this.sacarHipo.sacarHipotenusa.emit(false);
  }
  solution(){
    this.sol = !this.sol;
  }
}
