import { Component } from '@angular/core';
import { SumarDosNumsService } from 'src/app/services/basico/l1/sumar-dos-nums.service';

@Component({
  selector: 'app-sumar-numeros-variables',
  templateUrl: './sumar-numeros-variables.component.html',
  styleUrls: ['./sumar-numeros-variables.component.css']
})
export class SumarNumerosVariablesComponent {
  sol:boolean = false;
  constructor(private sumarNums: SumarDosNumsService){
  }
  close(){
    this.sumarNums.sumarNums.emit(false);
  }
  solution(){
    this.sol = !this.sol;
  }
}
