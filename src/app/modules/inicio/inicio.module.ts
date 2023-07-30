import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { ContenidoInicioComponent } from './contenido-inicio/contenido-inicio.component';


@NgModule({
  declarations: [
    ContenidoInicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
