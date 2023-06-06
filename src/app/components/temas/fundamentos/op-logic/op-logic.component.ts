import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-op-logic',
  templateUrl: './op-logic.component.html',
  styleUrls: ['./op-logic.component.css']
})
export class OpLogicComponent {
  title:string = "Operadores logicos";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
