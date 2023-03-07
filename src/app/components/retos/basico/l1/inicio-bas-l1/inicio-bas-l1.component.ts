import { Component } from '@angular/core';
import { SacarModuloService } from 'src/app/services/basico/l1/sacar-modulo.service';
import { SumarDosNumsService } from 'src/app/services/basico/l1/sumar-dos-nums.service';
import { SacarCuadradoService } from 'src/app/services/basico/l1/sacar-cuadrado.service';
import { SacarAreaCuadradoService } from 'src/app/services/basico/l1/sacar-area-cuadrado.service';
import { SacarAreaCilindroService } from 'src/app/services/basico/l1/sacar-area-cilindro.service';
import { SacarHipotenusaService } from 'src/app/services/basico/l1/sacar-hipotenusa.service';

@Component({
  selector: 'app-inicio-bas-l1',
  templateUrl: './inicio-bas-l1.component.html',
  styleUrls: ['./inicio-bas-l1.component.css']
})
export class InicioBasL1Component {
  sumar:boolean = false;
  sacar_mod:boolean = false;
  sacar_cua:boolean = false;
  sacar_area_cua:boolean = false;
  sacar_area_cil:boolean = false;
  sacar_hipo:boolean = false;
  constructor(
    private sumarNums: SumarDosNumsService,
    private sacarMod: SacarModuloService,
    private sacarCua: SacarCuadradoService,
    private sacarAreaCua: SacarAreaCuadradoService,
    private sacarAreaCil: SacarAreaCilindroService,
    private sacarHipo: SacarHipotenusaService
  ){}
  ngOnInit() {
    this.sumarNums.sumarNums.subscribe(s => this.sumar=s);
    this.sacarMod.sacarModulo.subscribe(s => this.sacar_mod=s);
    this.sacarCua.sacarCuadrado.subscribe(s => this.sacar_cua=s);
    this.sacarAreaCua.sacarAreaCuadrado.subscribe(s => this.sacar_area_cua=s);
    this.sacarAreaCil.sacarAreaCil.subscribe(s => this.sacar_area_cil=s);
    this.sacarHipo.sacarHipotenusa.subscribe(s => this.sacar_hipo =s);
  }
  openSumar() {
    this.sumar = true;
  }
  openSacarMod(){
    this.sacar_mod = true;
  }
  openSacarCua() {
    this.sacar_cua = true;
  }
  openSacarAreaCua(){
    this.sacar_area_cua = true;
  }
  openSacarAreaCil(){
    this.sacar_area_cil = true;
  }
  openSacarHipo(){
    this.sacar_hipo = true;
  }
}
