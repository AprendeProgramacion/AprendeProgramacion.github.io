import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-intro-gh',
  templateUrl: './intro-gh.component.html',
  styleUrls: ['./intro-gh.component.css']
})
export class IntroGhComponent {
  title:string = "Introduccion a GitHub";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
