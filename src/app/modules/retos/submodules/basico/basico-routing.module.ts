import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioBasL1Component } from './components/inicio-bas-l1/inicio-bas-l1.component';
import { BasicoViewComponent } from './views/basico-view/basico-view.component';
import { InicioBasL2Component } from './components/inicio-bas-l2/inicio-bas-l2.component';

const routes: Routes = [
  {
    path: '',
    component: BasicoViewComponent,
    children: [
      {
        path: '',
        component: InicioBasL1Component
      },
      {
        path: 'nivel-1',
        component: InicioBasL1Component
      },
      {
        path: 'nivel-2',
        component: InicioBasL2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicoRoutingModule { }
