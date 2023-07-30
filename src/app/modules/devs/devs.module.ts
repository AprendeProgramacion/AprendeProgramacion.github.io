import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevsRoutingModule } from './devs-routing.module';
import { PabloComponent } from './pablo/pablo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PabloComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DevsRoutingModule
  ]
})
export class DevsModule { }
