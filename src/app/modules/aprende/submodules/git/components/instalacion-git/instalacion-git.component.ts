import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-instalacion-git',
  templateUrl: './instalacion-git.component.html',
  styleUrls: ['./instalacion-git.component.css']
})
export class InstalacionGitComponent {
  title:string = "Instalación + Configuracion";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
