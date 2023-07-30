import { Component } from '@angular/core';
import { SacarAreaCilindroService } from 'src/app/services/basico/l1/sacar-area-cilindro.service';

@Component({
  selector: 'app-sacar-area-cilindro',
  templateUrl: './sacar-area-cilindro.component.html',
  styleUrls: ['./sacar-area-cilindro.component.css']
})
export class SacarAreaCilindroComponent {
  sol:boolean = false;
  constructor(private sacarAreaCil: SacarAreaCilindroService){}
  close(){
    this.sacarAreaCil.sacarAreaCil.emit(false);
  }
  solution(){
    this.sol= !this.sol;
  }
}
