import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { ContenidoInicioComponent } from "./components/contenido-inicio/contenido-inicio.component";
import { VariablesComponent } from "./components/temas/fundamentos/variables/variables.component";
import { ContenidoTemasComponent } from "./components/contenido-temas/contenido-temas.component";
import { InicioTemasComponent } from "./components/temas/inicio-temas/inicio-temas.component";
import { AboutComponent } from "./components/about/about.component";
import { ErrorComponent } from "./components/extra/error/error.component";
import { HistoriaComponent } from "./components/temas/antes-de-iniciar/historia/historia.component";
import { EspecialidadesComponent } from "./components/temas/antes-de-iniciar/especialidades/especialidades.component";
import { DefProgramacionComponent } from "./components/temas/fundamentos/def-programacion/def-programacion.component";
import { TiposLenguajesComponent } from "./components/temas/fundamentos/tipos-lenguajes/tipos-lenguajes.component";
import { EditoresIDESComponent } from "./components/temas/fundamentos/editores-ides/editores-ides.component";
import { OutputComponent } from "./components/temas/fundamentos/output/output.component";
import { InputComponent } from "./components/temas/fundamentos/input/input.component";
import { OpAritComponent } from "./components/temas/fundamentos/op-arit/op-arit.component";
import { ContenidoRetosComponent } from "./components/contenido-retos/contenido-retos.component";
import { OpLogicComponent } from "./components/temas/fundamentos/op-logic/op-logic.component";
import { CondComponent } from "./components/temas/fundamentos/cond/cond.component";
import { WhileComponent } from "./components/temas/fundamentos/while/while.component";
import { ForComponent } from "./components/temas/fundamentos/for/for.component";
import { FuncProcComponent } from "./components/temas/fundamentos/func-proc/func-proc.component";
import { LibreriasComponent } from "./components/temas/fundamentos/librerias/librerias.component";
import { ArreglosComponent } from "./components/temas/fundamentos/arreglos/arreglos.component";
import { InicioRetosComponent } from "./components/retos/inicio-retos/inicio-retos.component";
import { InicioBasL1Component } from "./components/retos/basico/l1/inicio-bas-l1/inicio-bas-l1.component";
import { InicioBasL2Component } from "./components/retos/basico/l2/inicio-bas-l2/inicio-bas-l2.component";
import { PabloComponent } from "./components/devs/pablo/pablo.component";
import { InicioFundamentosComponent } from "./components/temas/fundamentos/inicio-fundamentos/inicio-fundamentos.component";
import { InicioADIComponent } from "./components/temas/antes-de-iniciar/inicio-adi/inicio-adi.component";
import { InicioGitComponent } from "./components/temas/git/inicio-git/inicio-git.component";
import { QueEsGitComponent } from "./components/temas/git/que-es-git/que-es-git.component";
import { EstadosComponent } from "./components/temas/git/estados/estados.component";
import { InstalacionGitComponent } from "./components/temas/git/instalacion-git/instalacion-git.component";
import { TerminalBasicaGitComponent } from "./components/temas/git/terminal-basica-git/terminal-basica-git.component";
import { CrearRepoComponent } from "./components/temas/git/crear-repo/crear-repo.component";
import { ComandosBasicosGitComponent } from "./components/temas/git/comandos-basicos-git/comandos-basicos-git.component";

const appRoutes:Routes = [
    { path: '', component: ContenidoInicioComponent },
    { path: 'inicio', component: ContenidoInicioComponent },
    { path: 'aprende', component: ContenidoTemasComponent, children: [
      { path: '', component: InicioTemasComponent },
      { path: 'antes-de-iniciar', component: InicioADIComponent, children:[
        { path: '', component: HistoriaComponent },
        { path: 'historia', component: HistoriaComponent },
        { path: 'enfoques', component: EspecialidadesComponent },
        { path: '**', component: ErrorComponent }
      ]},
      { path: 'fundamentos', component: InicioFundamentosComponent, children:[
        { path: '', component: DefProgramacionComponent },
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
      { path: 'git', component: InicioGitComponent, children:[
        { path: '', component: QueEsGitComponent },
        { path: 'que-es-git', component: QueEsGitComponent },
        { path: 'estados', component: EstadosComponent },
        { path: 'instalacion', component: InstalacionGitComponent },
        { path: 'terminal', component: TerminalBasicaGitComponent },
        { path: 'crear-repositorio', component: CrearRepoComponent },
        { path: 'comandos-basicos', component: ComandosBasicosGitComponent },
        { path: '**', component: ErrorComponent },
      ]},
      { path: '**', component: ErrorComponent }
    ]},
    { path: 'retos', component: ContenidoRetosComponent, children:[
      { path: '', component: InicioRetosComponent },
      { path: 'basico/nivel-1', component: InicioBasL1Component },
      { path: 'basico/nivel-2', component: InicioBasL2Component },
      { path: '**', component: ErrorComponent }
    ]},
    { path: 'about', component: AboutComponent },
    { path: 'desarrolladores/pablo-uribe-zuluaga', component: PabloComponent },
    { path: '**', component: ErrorComponent }
];
export const appRoutingProviders:any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
