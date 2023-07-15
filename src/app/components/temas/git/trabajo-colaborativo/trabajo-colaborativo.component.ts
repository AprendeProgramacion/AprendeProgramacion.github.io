import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-trabajo-colaborativo',
  templateUrl: './trabajo-colaborativo.component.html',
  styleUrls: ['./trabajo-colaborativo.component.css']
})
export class TrabajoColaborativoComponent {
  title:string = "Trabajo Colaborativo";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
