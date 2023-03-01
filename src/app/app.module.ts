import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { ContenidoInicioComponent } from './components/contenido-inicio/contenido-inicio.component';
import { AsideTemasComponent } from './components/aside-temas/aside-temas.component';
import { FooterComponent } from './components/footer/footer.component';
import { VariablesComponent } from './components/temas/variables/variables.component';
import { routing, appRoutingProviders } from './app.routing';
import { ContenidoTemasComponent } from './components/contenido-temas/contenido-temas.component';
import { InicioTemasComponent } from './components/temas/inicio-temas/inicio-temas.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/extra/error/error.component';
import { HistoriaComponent } from './components/temas/historia/historia.component';
import { EspecialidadesComponent } from './components/temas/especialidades/especialidades.component';
import { DefProgramacionComponent } from './components/temas/def-programacion/def-programacion.component';
import { TiposLenguajesComponent } from './components/temas/tipos-lenguajes/tipos-lenguajes.component';
import { EditoresIDESComponent } from './components/temas/editores-ides/editores-ides.component';
import { OutputComponent } from './components/temas/output/output.component';
import { InputComponent } from './components/temas/input/input.component';
import { OpAritComponent } from './components/temas/op-arit/op-arit.component';
import { ContenidoRetosComponent } from './components/contenido-retos/contenido-retos.component';
import { AsideRetosComponent } from './components/aside-retos/aside-retos.component';
import { OpLogicComponent } from './components/temas/op-logic/op-logic.component';
import { CondComponent } from './components/temas/cond/cond.component';
import { WhileComponent } from './components/temas/while/while.component';
import { ForComponent } from './components/temas/for/for.component';
import { FuncProcComponent } from './components/temas/func-proc/func-proc.component';
import { LibreriasComponent } from './components/temas/librerias/librerias.component';
import { ArreglosComponent } from './components/temas/arreglos/arreglos.component';
import { SumarNumerosVariablesComponent } from './components/retos/basico/l1/sumar-numeros-variables/sumar-numeros-variables.component';
import { InicioRetosComponent } from './components/retos/inicio-retos/inicio-retos.component';
import { InicioBasL1Component } from './components/retos/basico/l1/inicio-bas-l1/inicio-bas-l1.component';
import { SacarModuloComponent } from './components/retos/basico/l1/sacar-modulo/sacar-modulo.component';

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
    SacarModuloComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
