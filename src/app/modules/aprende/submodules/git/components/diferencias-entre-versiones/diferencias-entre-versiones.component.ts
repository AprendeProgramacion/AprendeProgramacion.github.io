import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-diferencias-entre-versiones',
  templateUrl: './diferencias-entre-versiones.component.html',
  styleUrls: ['./diferencias-entre-versiones.component.css']
})
export class DiferenciasEntreVersionesComponent {
  title:string = "Diferencia entre versiones";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
