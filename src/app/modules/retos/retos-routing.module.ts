import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoRetosComponent } from './views/contenido-retos/contenido-retos.component';
import { InicioRetosComponent } from './components/inicio-retos/inicio-retos.component';

const routes: Routes = [
  {
    path: '',
    component: ContenidoRetosComponent,
    children: [
      {
        path: '',
        component: InicioRetosComponent
      },
      {
        path: 'fundamentos',
        loadChildren: () => import('./submodules/basico/basico.module').then(m => {
          return m.BasicoModule
        })
      }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetosRoutingModule { }
