import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntesDeIniciarRoutingModule } from './antes-de-iniciar-routing.module';
import { InicioADIComponent } from './views/inicio-adi/inicio-adi.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    InicioADIComponent,
    HistoriaComponent,
    EspecialidadesComponent,
  ],
  imports: [
    CommonModule,
    AntesDeIniciarRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class AntesDeIniciarModule { }
