import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicoRoutingModule } from './basico-routing.module';
import { InicioBasL1Component } from './components/inicio-bas-l1/inicio-bas-l1.component';
import { InicioBasL2Component } from './components/inicio-bas-l2/inicio-bas-l2.component';
import { BasicoViewComponent } from './views/basico-view/basico-view.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ModalComponent } from '../../components/modal/modal.component';


@NgModule({
  declarations: [
    InicioBasL1Component,
    InicioBasL2Component,
    BasicoViewComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BasicoRoutingModule,
    SharedModule
  ]
})
export class BasicoModule { }
