import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-tipos-lenguajes',
  templateUrl: './tipos-lenguajes.component.html',
  styleUrls: ['./tipos-lenguajes.component.css']
})
export class TiposLenguajesComponent {
  title:string = "Tipos de lenguajes";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
