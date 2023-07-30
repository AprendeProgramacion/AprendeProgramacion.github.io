import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-while',
  templateUrl: './while.component.html',
  styleUrls: ['./while.component.css']
})
export class WhileComponent {
  title:string = "Ciclos While";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
