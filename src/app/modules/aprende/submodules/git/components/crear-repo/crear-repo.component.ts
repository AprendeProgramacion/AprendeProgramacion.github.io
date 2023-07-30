import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-crear-repo',
  templateUrl: './crear-repo.component.html',
  styleUrls: ['./crear-repo.component.css']
})
export class CrearRepoComponent {
  title:string = "Creando Repositorio";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
