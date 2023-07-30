import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-viaje-tiempo',
  templateUrl: './viaje-tiempo.component.html',
  styleUrls: ['./viaje-tiempo.component.css']
})
export class ViajeTiempoComponent {
  title:string = "Viajar en el tiempo";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
