import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { ContenidoInicioComponent } from './components/contenido-inicio/contenido-inicio.component';
import { AsideTemasComponent } from './components/aside-temas/aside-temas.component';
import { FooterComponent } from './components/footer/footer.component';
import { VariablesComponent } from './components/temas/fundamentos/variables/variables.component';
import { routing, appRoutingProviders } from './app.routing';
import { ContenidoTemasComponent } from './components/contenido-temas/contenido-temas.component';
import { InicioTemasComponent } from './components/temas/inicio-temas/inicio-temas.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/extra/error/error.component';
import { HistoriaComponent } from './components/temas/antes-de-iniciar/historia/historia.component';
import { EspecialidadesComponent } from './components/temas/antes-de-iniciar/especialidades/especialidades.component';
import { DefProgramacionComponent } from './components/temas/fundamentos/def-programacion/def-programacion.component';
import { TiposLenguajesComponent } from './components/temas/fundamentos/tipos-lenguajes/tipos-lenguajes.component';
import { EditoresIDESComponent } from './components/temas/fundamentos/editores-ides/editores-ides.component';
import { OutputComponent } from './components/temas/fundamentos/output/output.component';
import { InputComponent } from './components/temas/fundamentos/input/input.component';
import { OpAritComponent } from './components/temas/fundamentos/op-arit/op-arit.component';
import { ContenidoRetosComponent } from './components/contenido-retos/contenido-retos.component';
import { AsideRetosComponent } from './components/aside-retos/aside-retos.component';
import { OpLogicComponent } from './components/temas/fundamentos/op-logic/op-logic.component';
import { CondComponent } from './components/temas/fundamentos/cond/cond.component';
import { WhileComponent } from './components/temas/fundamentos/while/while.component';
import { ForComponent } from './components/temas/fundamentos/for/for.component';
import { FuncProcComponent } from './components/temas/fundamentos/func-proc/func-proc.component';
import { LibreriasComponent } from './components/temas/fundamentos/librerias/librerias.component';
import { ArreglosComponent } from './components/temas/fundamentos/arreglos/arreglos.component';
import { SumarNumerosVariablesComponent } from './components/retos/basico/l1/sumar-numeros-variables/sumar-numeros-variables.component';
import { InicioRetosComponent } from './components/retos/inicio-retos/inicio-retos.component';
import { InicioBasL1Component } from './components/retos/basico/l1/inicio-bas-l1/inicio-bas-l1.component';
import { SacarModuloComponent } from './components/retos/basico/l1/sacar-modulo/sacar-modulo.component';
import { SacarCuadradoComponent } from './components/retos/basico/l1/sacar-cuadrado/sacar-cuadrado.component';
import { SacarAreaCuadradoComponent } from './components/retos/basico/l1/sacar-area-cuadrado/sacar-area-cuadrado.component';
import { SacarAreaCilindroComponent } from './components/retos/basico/l1/sacar-area-cilindro/sacar-area-cilindro.component';
import { SacarHipotenusaComponent } from './components/retos/basico/l1/sacar-hipotenusa/sacar-hipotenusa.component';
import { SacarDefinitivaComponent } from './components/retos/basico/l2/sacar-definitiva/sacar-definitiva.component';
import { InicioBasL2Component } from './components/retos/basico/l2/inicio-bas-l2/inicio-bas-l2.component';
import { EvaluarDiaComponent } from './components/retos/basico/l2/evaluar-dia/evaluar-dia.component';
import { PabloComponent } from './components/devs/pablo/pablo.component';
import { InicioFundamentosComponent } from './components/temas/fundamentos/inicio-fundamentos/inicio-fundamentos.component';
import { InicioADIComponent } from './components/temas/antes-de-iniciar/inicio-adi/inicio-adi.component';
import { InicioGitComponent } from './components/temas/git/inicio-git/inicio-git.component';
import { QueEsGitComponent } from './components/temas/git/que-es-git/que-es-git.component';
import { EstadosComponent } from './components/temas/git/estados/estados.component';
import { InstalacionGitComponent } from './components/temas/git/instalacion-git/instalacion-git.component';
import { TerminalBasicaGitComponent } from './components/temas/git/terminal-basica-git/terminal-basica-git.component';
import { CrearRepoComponent } from './components/temas/git/crear-repo/crear-repo.component';
import { ComandosBasicosGitComponent } from './components/temas/git/comandos-basicos-git/comandos-basicos-git.component';
import { ViajeTiempoComponent } from './components/temas/git/viaje-tiempo/viaje-tiempo.component';
import { DiferenciasEntreVersionesComponent } from './components/temas/git/diferencias-entre-versiones/diferencias-entre-versiones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ContenidoInicioComponent,
    AsideTemasComponent,
    FooterComponent,
    VariablesComponent,
    ContenidoTemasComponent,
    InicioTemasComponent,
    AboutComponent,
    ErrorComponent,
    HistoriaComponent,
    EspecialidadesComponent,
    DefProgramacionComponent,
    TiposLenguajesComponent,
    EditoresIDESComponent,
    OutputComponent,
    InputComponent,
    OpAritComponent,
    ContenidoRetosComponent,
    AsideRetosComponent,
    OpLogicComponent,
    CondComponent,
    WhileComponent,
    ForComponent,
    FuncProcComponent,
    LibreriasComponent,
    ArreglosComponent,
    SumarNumerosVariablesComponent,
    InicioRetosComponent,
    InicioBasL1Component,
    SacarModuloComponent,
    SacarCuadradoComponent,
    SacarAreaCuadradoComponent,
    SacarAreaCilindroComponent,
    SacarHipotenusaComponent,
    InicioBasL2Component,
    SacarDefinitivaComponent,
    EvaluarDiaComponent,
    PabloComponent,
    InicioFundamentosComponent,
    InicioADIComponent,
    InicioGitComponent,
    QueEsGitComponent,
    EstadosComponent,
    InstalacionGitComponent,
    TerminalBasicaGitComponent,
    CrearRepoComponent,
    ComandosBasicosGitComponent,
    ViajeTiempoComponent,
    DiferenciasEntreVersionesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
