import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./modules/inicio/inicio.module`).then(m => m.InicioModule)
  },
  {
    path: 'aprende',
    loadChildren: () => import(`./modules/aprende/aprende.module`).then(m => m.AprendeModule)
  },
  {
    path: 'retos',
    loadChildren: () => import(`./modules/retos/retos.module`).then(m => m.RetosModule)
  },
  {
    path: 'about',
    loadChildren: () => import(`./modules/about/about.module`).then(m => m.AboutModule)
  },
  {
    path: 'desarrolladores',
    loadChildren: () => import(`./modules/devs/devs.module`).then(m => m.DevsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
