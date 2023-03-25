import { Component } from '@angular/core';
import { SacarDefinitivaService } from 'src/app/services/basico/l2/sacar-definitiva.service';

@Component({
  selector: 'app-sacar-def',
  templateUrl: './sacar-definitiva.component.html',
  styleUrls: ['./sacar-definitiva.component.css']
})
export class SacarDefinitivaComponent {
  sol: boolean = false;
  constructor(private sacarDef: SacarDefinitivaService){
  }
  close(){
    this.sacarDef.sacarDefinitiva.emit(false);
  }
  solution(){
    this.sol = !this.sol;
  }
}
