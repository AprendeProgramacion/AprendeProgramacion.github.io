import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-pablo',
  templateUrl: './pablo.component.html',
  styleUrls: ['./pablo.component.css']
})
export class PabloComponent {
  title: string = 'Pablo Uribe Zuluaga'
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
