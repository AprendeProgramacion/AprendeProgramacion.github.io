import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { ContenidoInicioComponent } from "./components/contenido-inicio/contenido-inicio.component";
import { VariablesComponent } from "./components/temas/variables/variables.component";
import { ContenidoTemasComponent } from "./components/contenido-temas/contenido-temas.component";
import { InicioTemasComponent } from "./components/temas/inicio-temas/inicio-temas.component";
import { AboutComponent } from "./components/about/about.component";
import { ErrorComponent } from "./components/extra/error/error.component";
import { HistoriaComponent } from "./components/temas/historia/historia.component";
import { EspecialidadesComponent } from "./components/temas/especialidades/especialidades.component";
import { DefProgramacionComponent } from "./components/temas/def-programacion/def-programacion.component";
import { TiposLenguajesComponent } from "./components/temas/tipos-lenguajes/tipos-lenguajes.component";
import { EditoresIDESComponent } from "./components/temas/editores-ides/editores-ides.component";
import { OutputComponent } from "./components/temas/output/output.component";
import { InputComponent } from "./components/temas/input/input.component";
import { OpAritComponent } from "./components/temas/op-arit/op-arit.component";
import { ContenidoRetosComponent } from "./components/contenido-retos/contenido-retos.component";
import { OpLogicComponent } from "./components/temas/op-logic/op-logic.component";
import { CondComponent } from "./components/temas/cond/cond.component";
import { WhileComponent } from "./components/temas/while/while.component";
import { ForComponent } from "./components/temas/for/for.component";
import { FuncProcComponent } from "./components/temas/func-proc/func-proc.component";
import { LibreriasComponent } from "./components/temas/librerias/librerias.component";
import { ArreglosComponent } from "./components/temas/arreglos/arreglos.component";
import { InicioRetosComponent } from "./components/retos/inicio-retos/inicio-retos.component";
import { InicioBasL1Component } from "./components/retos/basico/l1/inicio-bas-l1/inicio-bas-l1.component";
import { InicioBasL2Component } from "./components/retos/basico/l2/inicio-bas-l2/inicio-bas-l2.component";
import { PabloComponent } from "./components/devs/pablo/pablo.component";

const appRoutes:Routes = [
    { path: '', component: ContenidoInicioComponent },
    { path: 'inicio', component: ContenidoInicioComponent },
    { path: 'aprende', component: ContenidoTemasComponent, children: [
      { path: '', component: InicioTemasComponent },
      { path: 'historia', component: HistoriaComponent },
      { path: 'enfoques', component: EspecialidadesComponent },
      { path: 'que-es-programacion', component: DefProgramacionComponent },
      { path: 'tipos-de-lenguajes', component: TiposLenguajesComponent },
      { path: 'editores-ides', component: EditoresIDESComponent },
      { path: 'output', component: OutputComponent },
      { path: 'variables', component: VariablesComponent },
      { path: 'input', component: InputComponent },
      { path: 'operadores-aritmeticos', component: OpAritComponent },
      { path: 'operadores-logicos', component: OpLogicComponent },
      { path: 'condicionales', component: CondComponent },
      { path: 'arreglos-y-matrices', component: ArreglosComponent},
      { path: 'ciclos-while', component: WhileComponent },
      { path: 'ciclos-for', component: ForComponent },
      { path: 'funciones-y-procedimientos', component: FuncProcComponent },
      { path: 'librerias', component: LibreriasComponent },
      { path: '**', component: ErrorComponent }
    ]},
    { path: 'retos', component: ContenidoRetosComponent, children:[
      { path: '', component: InicioRetosComponent },
      { path: 'basico/nivel-1', component: InicioBasL1Component },
      { path: 'basico/nivel-2', component: InicioBasL2Component },
      { path: '**', component: ErrorComponent }
    ]},
    { path: 'about', component: AboutComponent },
    { path: '**', component: ErrorComponent },
    { path: 'desarrolladores/pablo-uribe-zuluaga', component: PabloComponent },
    { path: '**', component: ErrorComponent }
];
export const appRoutingProviders:any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
