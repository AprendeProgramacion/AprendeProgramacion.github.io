import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-contenido-temas',
  templateUrl: './contenido-temas.component.html',
  styleUrls: ['./contenido-temas.component.css']
})
export class ContenidoTemasComponent {
  title:string = "Aprende"
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
