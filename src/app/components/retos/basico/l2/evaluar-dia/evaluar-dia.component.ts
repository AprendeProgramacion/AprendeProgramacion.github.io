import { Component } from '@angular/core';
import { EvaluarDiaService } from 'src/app/services/basico/l2/evaluar-dia.service';

@Component({
  selector: 'app-evaluar-dia',
  templateUrl: './evaluar-dia.component.html',
  styleUrls: ['./evaluar-dia.component.css']
})
export class EvaluarDiaComponent {
  sol: boolean = false;
  constructor(private evaluarDia:EvaluarDiaService){}
  close(){
    this.evaluarDia.evaluarDia.emit(false);
  }
  solution(){
    this.sol = !this.sol;
  }
}
