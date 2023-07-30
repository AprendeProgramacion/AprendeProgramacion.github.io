import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicoRoutingModule } from './basico-routing.module';
import { InicioBasL1Component } from './components/inicio-bas-l1/inicio-bas-l1.component';
import { InicioBasL2Component } from './components/inicio-bas-l2/inicio-bas-l2.component';
import { SacarAreaCilindroComponent } from './components/l1/sacar-area-cilindro/sacar-area-cilindro.component';
import { SacarAreaCuadradoComponent } from './components/l1/sacar-area-cuadrado/sacar-area-cuadrado.component';
import { SacarCuadradoComponent } from './components/l1/sacar-cuadrado/sacar-cuadrado.component';
import { SacarHipotenusaComponent } from './components/l1/sacar-hipotenusa/sacar-hipotenusa.component';
import { SacarModuloComponent } from './components/l1/sacar-modulo/sacar-modulo.component';
import { SumarNumerosVariablesComponent } from './components/l1/sumar-numeros-variables/sumar-numeros-variables.component';
import { EvaluarDiaComponent } from './components/l2/evaluar-dia/evaluar-dia.component';
import { SacarDefinitivaComponent } from './components/l2/sacar-definitiva/sacar-definitiva.component';
import { BasicoViewComponent } from './views/basico-view/basico-view.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    InicioBasL1Component,
    InicioBasL2Component,
    SacarAreaCilindroComponent,
    SacarAreaCuadradoComponent,
    SacarCuadradoComponent,
    SacarHipotenusaComponent,
    SacarModuloComponent,
    SumarNumerosVariablesComponent,
    EvaluarDiaComponent,
    SacarDefinitivaComponent,
    BasicoViewComponent
  ],
  imports: [
    CommonModule,
    BasicoRoutingModule,
    SharedModule
  ]
})
export class BasicoModule { }
