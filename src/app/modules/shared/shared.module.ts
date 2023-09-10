import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './extra/error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { CourseSelectComponent } from './course-select/course-select.component';


@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AsideMenuComponent,
    CourseSelectComponent
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
    AsideMenuComponent,
    CourseSelectComponent
  ]
})
export class SharedModule { }
