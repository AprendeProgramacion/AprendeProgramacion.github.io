import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefProgramacionComponent } from './components/def-programacion/def-programacion.component';
import { InicioFundamentosComponent } from './views/inicio-fundamentos/inicio-fundamentos.component';
import { ErrorComponent } from 'src/app/modules/shared/extra/error/error.component';
import { TiposLenguajesComponent } from './components/tipos-lenguajes/tipos-lenguajes.component';
import { EditoresIDESComponent } from './components/editores-ides/editores-ides.component';
import { OutputComponent } from './components/output/output.component';
import { VariablesComponent } from './components/variables/variables.component';
import { InputComponent } from './components/input/input.component';
import { OpAritComponent } from './components/op-arit/op-arit.component';
import { OpLogicComponent } from './components/op-logic/op-logic.component';
import { CondComponent } from './components/cond/cond.component';
import { ArreglosComponent } from './components/arreglos/arreglos.component';
import { WhileComponent } from './components/while/while.component';
import { ForComponent } from './components/for/for.component';
import { FuncProcComponent } from './components/func-proc/func-proc.component';
import { LibreriasComponent } from './components/librerias/librerias.component';

const routes: Routes = [
  {
    path: '',
    component: InicioFundamentosComponent,
    children: [
      {
        path: '',
        component: DefProgramacionComponent
      },
      {
        path: 'que-es-programacion',
        component: DefProgramacionComponent
      },
      {
        path: 'tipos-de-lenguajes',
        component: TiposLenguajesComponent
      },
      {
        path: 'editores-ides',
        component: EditoresIDESComponent
      },
      {
        path: 'output',
        component: OutputComponent
      },
      {
        path: 'variables',
        component: VariablesComponent
      },
      {
        path: 'input',
        component: InputComponent
      },
      {
        path: 'operadores-aritmeticos',
        component: OpAritComponent
      },
      {
        path: 'operadores-logicos',
        component: OpLogicComponent
      },
      {
        path: 'condicionales',
        component: CondComponent
      },
      {
        path: 'arreglos-y-matrices',
        component: ArreglosComponent
      },
      {
        path: 'ciclos-while',
        component: WhileComponent
      },
      {
        path: 'ciclos-for',
        component: ForComponent
      },
      {
        path: 'funciones-y-procedimientos',
        component: FuncProcComponent
      },
      {
        path: 'librerias',
        component: LibreriasComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundamentosRoutingModule { }
