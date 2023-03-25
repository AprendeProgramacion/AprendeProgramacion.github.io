import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-def-programacion',
  templateUrl: './def-programacion.component.html',
  styleUrls: ['./def-programacion.component.css']
})
export class DefProgramacionComponent {
  title:string = "¿Que es la programacion?";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
