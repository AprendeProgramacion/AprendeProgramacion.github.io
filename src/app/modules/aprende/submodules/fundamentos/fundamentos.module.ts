import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundamentosRoutingModule } from './fundamentos-routing.module';
import { InicioFundamentosComponent } from './views/inicio-fundamentos/inicio-fundamentos.component';
import { ArreglosComponent } from './components/arreglos/arreglos.component';
import { CondComponent } from './components/cond/cond.component';
import { DefProgramacionComponent } from './components/def-programacion/def-programacion.component';
import { EditoresIDESComponent } from './components/editores-ides/editores-ides.component';
import { ForComponent } from './components/for/for.component';
import { FuncProcComponent } from './components/func-proc/func-proc.component';
import { InputComponent } from './components/input/input.component';
import { LibreriasComponent } from './components/librerias/librerias.component';
import { OpAritComponent } from './components/op-arit/op-arit.component';
import { OpLogicComponent } from './components/op-logic/op-logic.component';
import { OutputComponent } from './components/output/output.component';
import { TiposLenguajesComponent } from './components/tipos-lenguajes/tipos-lenguajes.component';
import { VariablesComponent } from './components/variables/variables.component';
import { WhileComponent } from './components/while/while.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    InicioFundamentosComponent,
    ArreglosComponent,
    CondComponent,
    DefProgramacionComponent,
    EditoresIDESComponent,
    ForComponent,
    FuncProcComponent,
    InputComponent,
    LibreriasComponent,
    OpAritComponent,
    OpLogicComponent,
    OutputComponent,
    TiposLenguajesComponent,
    VariablesComponent,
    WhileComponent
  ],
  imports: [
    CommonModule,
    FundamentosRoutingModule,
    SharedModule
  ]
})
export class FundamentosModule { }
