import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-que-es-git',
  templateUrl: './que-es-git.component.html',
  styleUrls: ['./que-es-git.component.css']
})
export class QueEsGitComponent {
  title:string = "Git";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
