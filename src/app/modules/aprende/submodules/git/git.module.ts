import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitRoutingModule } from './git-routing.module';
import { InicioGitComponent } from './views/inicio-git/inicio-git.component';
import { ComandosBasicosGitComponent } from './components/comandos-basicos-git/comandos-basicos-git.component';
import { CrearRepoComponent } from './components/crear-repo/crear-repo.component';
import { DiferenciasEntreVersionesComponent } from './components/diferencias-entre-versiones/diferencias-entre-versiones.component';
import { EstadosComponent } from './components/estados/estados.component';
import { InstalacionGitComponent } from './components/instalacion-git/instalacion-git.component';
import { IntroGhComponent } from './components/intro-gh/intro-gh.component';
import { PrimerosPasosGHComponent } from './components/primeros-pasos-gh/primeros-pasos-gh.component';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';
import { QueEsGitComponent } from './components/que-es-git/que-es-git.component';
import { RamasGitComponent } from './components/ramas-git/ramas-git.component';
import { SshGithubComponent } from './components/ssh-github/ssh-github.component';
import { TerminalBasicaGitComponent } from './components/terminal-basica-git/terminal-basica-git.component';
import { TrabajoColaborativoComponent } from './components/trabajo-colaborativo/trabajo-colaborativo.component';
import { ViajeTiempoComponent } from './components/viaje-tiempo/viaje-tiempo.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    InicioGitComponent,
    ComandosBasicosGitComponent,
    CrearRepoComponent,
    DiferenciasEntreVersionesComponent,
    EstadosComponent,
    InstalacionGitComponent,
    IntroGhComponent,
    PrimerosPasosGHComponent,
    PullRequestsComponent,
    QueEsGitComponent,
    RamasGitComponent,
    SshGithubComponent,
    TerminalBasicaGitComponent,
    TrabajoColaborativoComponent,
    ViajeTiempoComponent
  ],
  imports: [
    CommonModule,
    GitRoutingModule,
    SharedModule
  ]
})
export class GitModule { }
