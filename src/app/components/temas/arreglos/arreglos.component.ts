import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-arreglos',
  templateUrl: './arreglos.component.html',
  styleUrls: ['./arreglos.component.css']
})
export class ArreglosComponent {
  title:string = "Arreglos y Matrices";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
