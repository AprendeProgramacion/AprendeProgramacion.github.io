import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetosRoutingModule } from './retos-routing.module';
import { RouterModule } from '@angular/router';
import { ContenidoRetosComponent } from './views/contenido-retos/contenido-retos.component';
import { SharedModule } from '../shared/shared.module';
import { InicioRetosComponent } from './components/inicio-retos/inicio-retos.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    ContenidoRetosComponent,
    InicioRetosComponent
  ],
  imports: [
    CommonModule,
    RetosRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class RetosModule { }
