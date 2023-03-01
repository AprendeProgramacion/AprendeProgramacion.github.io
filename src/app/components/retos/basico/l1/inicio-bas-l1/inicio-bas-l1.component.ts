import { Component } from '@angular/core';
import { SacarModuloService } from 'src/app/services/basico/l1/sacar-modulo.service';
import { SumarDosNumsService } from 'src/app/services/basico/l1/sumar-dos-nums.service';

@Component({
  selector: 'app-inicio-bas-l1',
  templateUrl: './inicio-bas-l1.component.html',
  styleUrls: ['./inicio-bas-l1.component.css']
})
export class InicioBasL1Component {
  sumar:boolean = false;
  sacar_mod:boolean = false;
  constructor(
    private sumarNums: SumarDosNumsService,
    private sacarMod: SacarModuloService
  ){}
  ngOnInit() {
    this.sumarNums.sumarNums.subscribe(s => this.sumar=s);
    this.sacarMod.sacarModulo.subscribe(s => this.sacar_mod=s);
  }
  openSumar() {
    this.sumar = true;
  }
  openSacarMod(){
    this.sacar_mod = true;
  }
}
