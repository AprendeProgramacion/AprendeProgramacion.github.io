import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PabloComponent } from './pablo/pablo.component';
import { ErrorComponent } from '../shared/extra/error/error.component';

const routes: Routes = [
  {
    path: 'pablo-uribe-zuluaga',
    component: PabloComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevsRoutingModule { }
