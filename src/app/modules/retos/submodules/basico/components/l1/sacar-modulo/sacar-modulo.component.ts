import { Component } from '@angular/core';
import { SacarModuloService } from 'src/app/services/basico/l1/sacar-modulo.service';

@Component({
  selector: 'app-sacar-modulo',
  templateUrl: './sacar-modulo.component.html',
  styleUrls: ['./sacar-modulo.component.css']
})
export class SacarModuloComponent {
  sol:boolean = false;
  constructor(private sacarMod:SacarModuloService){
  }
  close(){
    this.sacarMod.sacarModulo.emit(false);
  }
  solution(){
    this.sol= !this.sol;
  }
}
