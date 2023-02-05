import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { ContenidoInicioComponent } from './components/contenido-inicio/contenido-inicio.component';
import { AsideTemasComponent } from './components/aside-temas/aside-temas.component';
import { FooterComponent } from './components/footer/footer.component';
import { VariablesComponent } from './components/temas/variables/variables.component';
import { routing, appRoutingProviders } from './app.routing';
import { ContenidoTemasComponent } from './components/contenido-temas/contenido-temas.component';
import { InicioTemasComponent } from './components/temas/inicio-temas/inicio-temas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ContenidoInicioComponent,
    AsideTemasComponent,
    FooterComponent,
    VariablesComponent,
    ContenidoTemasComponent,
    InicioTemasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
