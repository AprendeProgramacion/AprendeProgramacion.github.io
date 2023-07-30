import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoTemasComponent } from './views/contenido-temas/contenido-temas.component';
import { InicioTemasComponent } from './components/inicio-temas/inicio-temas.component';

const routes: Routes = [
  {
    path: '',
    component: ContenidoTemasComponent,
    children: [
      {
        path: '',
        component: InicioTemasComponent
      },
      {
        path: 'antes-de-iniciar',
        loadChildren: () => import('./submodules/antes-de-iniciar/antes-de-iniciar.module').then(m => m.AntesDeIniciarModule)
      },
      {
        path: 'fundamentos',
        loadChildren: () => import('./submodules/fundamentos/fundamentos.module').then(m => m.FundamentosModule)
      },
      {
        path: 'git',
        loadChildren: () => import('./submodules/git/git.module').then(m => m.GitModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprendeRoutingModule { }
