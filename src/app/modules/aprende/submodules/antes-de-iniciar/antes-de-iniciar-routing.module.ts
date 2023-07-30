import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioADIComponent } from './views/inicio-adi/inicio-adi.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ErrorComponent } from 'src/app/modules/shared/extra/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: InicioADIComponent,
    children: [
      {
        path: '',
        component: HistoriaComponent
      },
      {
        path: 'historia',
        component: HistoriaComponent
      },
      {
        path: 'enfoques',
        component: EspecialidadesComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntesDeIniciarRoutingModule { }
