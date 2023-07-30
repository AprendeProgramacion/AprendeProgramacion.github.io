import { Component } from '@angular/core';
import { EvaluarDiaService } from 'src/app/services/basico/l2/evaluar-dia.service';
import { SacarDefinitivaService } from 'src/app/services/basico/l2/sacar-definitiva.service';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-inicio-bas-l2',
  templateUrl: './inicio-bas-l2.component.html',
  styleUrls: ['./inicio-bas-l2.component.css']
})
export class InicioBasL2Component {
  sacar_def: boolean = false;
  eval_dia:boolean = false;
  title:string = "Retos Basicos Nivel 2";
  constructor(
    private txt:TitleTextService,
    private sacarDef: SacarDefinitivaService,
    private evalDia:EvaluarDiaService
  ){}

  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
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
