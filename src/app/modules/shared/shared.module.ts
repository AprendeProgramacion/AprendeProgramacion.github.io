import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './extra/error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';


@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AsideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ErrorComponent,
    AsideMenuComponent
  ]
})
export class SharedModule { }
