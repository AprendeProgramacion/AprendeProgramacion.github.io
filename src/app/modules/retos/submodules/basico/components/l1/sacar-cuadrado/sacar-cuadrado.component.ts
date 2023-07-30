import { Component } from '@angular/core';
import { SacarCuadradoService } from 'src/app/services/basico/l1/sacar-cuadrado.service';

@Component({
  selector: 'app-sacar-cuadrado',
  templateUrl: './sacar-cuadrado.component.html',
  styleUrls: ['./sacar-cuadrado.component.css']
})
export class SacarCuadradoComponent {
  sol:boolean = false;
  constructor(private sacarCua:SacarCuadradoService){
  }
  close(){
    this.sacarCua.sacarCuadrado.emit(false);
  }
  solution(){
    this.sol= !this.sol;
  }
}
