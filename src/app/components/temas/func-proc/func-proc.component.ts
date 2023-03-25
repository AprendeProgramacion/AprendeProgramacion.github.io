import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-func-proc',
  templateUrl: './func-proc.component.html',
  styleUrls: ['./func-proc.component.css']
})
export class FuncProcComponent {
  title:string = "Funciones y procedimientos";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
