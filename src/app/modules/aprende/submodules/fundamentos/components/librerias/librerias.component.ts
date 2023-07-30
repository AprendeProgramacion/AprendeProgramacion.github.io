import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-librerias',
  templateUrl: './librerias.component.html',
  styleUrls: ['./librerias.component.css']
})
export class LibreriasComponent {
  title:string = "Librerias";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
