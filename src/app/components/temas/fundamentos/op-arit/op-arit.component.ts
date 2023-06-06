import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-op-arit',
  templateUrl: './op-arit.component.html',
  styleUrls: ['./op-arit.component.css']
})
export class OpAritComponent {
  title:string = "Operadores aritméticos";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
