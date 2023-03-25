import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-inicio-temas',
  templateUrl: './inicio-temas.component.html',
  styleUrls: ['./inicio-temas.component.css']
})
export class InicioTemasComponent {
  title:string = "Aprende";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
