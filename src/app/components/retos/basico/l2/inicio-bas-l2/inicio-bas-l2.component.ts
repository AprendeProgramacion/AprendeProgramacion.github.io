import { Component } from '@angular/core';
import { EvaluarDiaService } from 'src/app/services/basico/l2/evaluar-dia.service';
import { SacarDefinitivaService } from 'src/app/services/basico/l2/sacar-definitiva.service';

@Component({
  selector: 'app-inicio-bas-l2',
  templateUrl: './inicio-bas-l2.component.html',
  styleUrls: ['./inicio-bas-l2.component.css']
})
export class InicioBasL2Component {
  sacar_def: boolean = false;
  eval_dia:boolean = false;

  constructor(
    private sacarDef: SacarDefinitivaService,
    private evalDia:EvaluarDiaService
  ){}

  ngOnInit(){
    this.sacarDef.sacarDefinitiva.subscribe( s => this.sacar_def = s);
    this.evalDia.evaluarDia.subscribe( s => this.eval_dia = s);
  }
  openSacarDef(){
    this.sacar_def = true;
  }
  openEvaluarDia(){
    this.eval_dia = true;
  }
}
