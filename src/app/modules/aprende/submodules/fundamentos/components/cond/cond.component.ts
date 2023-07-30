import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-cond',
  templateUrl: './cond.component.html',
  styleUrls: ['./cond.component.css']
})
export class CondComponent {
  title:string = "Condicionales";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
