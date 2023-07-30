import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-primeros-pasos-gh',
  templateUrl: './primeros-pasos-gh.component.html',
  styleUrls: ['./primeros-pasos-gh.component.css']
})
export class PrimerosPasosGHComponent {
  title:string = "Primeros pasos en GitHub";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
