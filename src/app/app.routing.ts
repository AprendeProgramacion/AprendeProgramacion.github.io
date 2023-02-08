import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { ContenidoInicioComponent } from "./components/contenido-inicio/contenido-inicio.component";
import { VariablesComponent } from "./components/temas/variables/variables.component";
import { ContenidoTemasComponent } from "./components/contenido-temas/contenido-temas.component";
import { InicioTemasComponent } from "./components/temas/inicio-temas/inicio-temas.component";
import { AboutComponent } from "./components/about/about.component";
import { ErrorComponent } from "./components/extra/error/error.component";

const appRoutes:Routes = [
    { path: '', component: ContenidoInicioComponent },
    { path: 'inicio', component: ContenidoInicioComponent },
    { path: 'temas', component: ContenidoTemasComponent, children: [
      { path: '', component: InicioTemasComponent },
      { path: 'variables', component: VariablesComponent },
      { path: '**', component: ErrorComponent }
    ]},
    { path: 'about', component: AboutComponent },
    { path: '**', component: ErrorComponent }
];
export const appRoutingProviders:any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
