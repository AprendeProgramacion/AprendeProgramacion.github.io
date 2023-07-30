import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioGitComponent } from './views/inicio-git/inicio-git.component';
import { QueEsGitComponent } from './components/que-es-git/que-es-git.component';
import { ErrorComponent } from 'src/app/modules/shared/extra/error/error.component';
import { EstadosComponent } from './components/estados/estados.component';
import { InstalacionGitComponent } from './components/instalacion-git/instalacion-git.component';
import { TerminalBasicaGitComponent } from './components/terminal-basica-git/terminal-basica-git.component';
import { CrearRepoComponent } from './components/crear-repo/crear-repo.component';
import { ComandosBasicosGitComponent } from './components/comandos-basicos-git/comandos-basicos-git.component';
import { ViajeTiempoComponent } from './components/viaje-tiempo/viaje-tiempo.component';
import { DiferenciasEntreVersionesComponent } from './components/diferencias-entre-versiones/diferencias-entre-versiones.component';
import { RamasGitComponent } from './components/ramas-git/ramas-git.component';
import { SshGithubComponent } from './components/ssh-github/ssh-github.component';
import { IntroGhComponent } from './components/intro-gh/intro-gh.component';
import { PrimerosPasosGHComponent } from './components/primeros-pasos-gh/primeros-pasos-gh.component';
import { TrabajoColaborativoComponent } from './components/trabajo-colaborativo/trabajo-colaborativo.component';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';

const routes: Routes = [
  {
    path: '',
    component: InicioGitComponent,
    children:[
      {
        path: '',
        component: QueEsGitComponent
      },
      {
        path: 'que-es-git',
        component: QueEsGitComponent
      },
      {
        path: 'estados',
        component: EstadosComponent
      },
      {
        path: 'instalacion',
        component: InstalacionGitComponent
      },
      {
        path: 'terminal',
        component: TerminalBasicaGitComponent
      },
      {
        path: 'crear-repositorio',
        component: CrearRepoComponent
      },
      {
        path: 'comandos-basicos',
        component: ComandosBasicosGitComponent
      },
      {
        path: 'viaje-en-el-tiempo',
        component: ViajeTiempoComponent
      },
      {
        path: 'diferencia-entre-versiones',
        component: DiferenciasEntreVersionesComponent
      },
      {
        path: 'ramas',
        component: RamasGitComponent
      },
      {
        path: 'ssh-github',
        component: SshGithubComponent
      },
      {
        path: 'intro-github',
        component: IntroGhComponent
      },
      {
        path: 'primeros-pasos-github',
        component: PrimerosPasosGHComponent
      },
      {
        path: 'trabajo-colaborativo',
        component: TrabajoColaborativoComponent
      },
      {
        path: 'pull-requests',
        component: PullRequestsComponent
      },
      {
        path: '**',
        component: ErrorComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitRoutingModule { }
