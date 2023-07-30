import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-contenido-retos',
  templateUrl: './contenido-retos.component.html',
  styleUrls: ['./contenido-retos.component.css']
})
export class ContenidoRetosComponent {
  title:string = 'retos';
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
