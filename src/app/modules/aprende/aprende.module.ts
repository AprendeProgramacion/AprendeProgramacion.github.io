import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprendeRoutingModule } from './aprende-routing.module';
import { RouterModule } from '@angular/router';
import { InicioTemasComponent } from './components/inicio-temas/inicio-temas.component';
import { ContenidoTemasComponent } from './views/contenido-temas/contenido-temas.component';
import { AntesDeIniciarModule } from './submodules/antes-de-iniciar/antes-de-iniciar.module';
import { FundamentosModule } from './submodules/fundamentos/fundamentos.module';
import { GitModule } from './submodules/git/git.module';


@NgModule({
  declarations: [
    ContenidoTemasComponent,
    InicioTemasComponent,
  ],
  imports: [
    CommonModule,
    AprendeRoutingModule,
    RouterModule,
    AntesDeIniciarModule,
    FundamentosModule,
    GitModule
  ],
})
export class AprendeModule { }
