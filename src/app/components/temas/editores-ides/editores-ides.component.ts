import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-editores-ides',
  templateUrl: './editores-ides.component.html',
  styleUrls: ['./editores-ides.component.css']
})
export class EditoresIDESComponent {
  title:string = "Editores de código";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
