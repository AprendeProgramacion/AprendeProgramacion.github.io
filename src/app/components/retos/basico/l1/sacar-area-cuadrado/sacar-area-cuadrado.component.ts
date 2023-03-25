import { Component } from '@angular/core';
import { SacarAreaCuadradoService } from 'src/app/services/basico/l1/sacar-area-cuadrado.service';

@Component({
  selector: 'app-sacar-area-cuadrado',
  templateUrl: './sacar-area-cuadrado.component.html',
  styleUrls: ['./sacar-area-cuadrado.component.css']
})
export class SacarAreaCuadradoComponent {
  sol:boolean = false;
  constructor(private sacarAreaCua: SacarAreaCuadradoService){}
  close(){
    this.sacarAreaCua.sacarAreaCuadrado.emit(false);
  }
  solution(){
    this.sol= !this.sol;
  }
}
