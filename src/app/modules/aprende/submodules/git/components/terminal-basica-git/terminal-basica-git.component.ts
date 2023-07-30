import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-terminal-basica-git',
  templateUrl: './terminal-basica-git.component.html',
  styleUrls: ['./terminal-basica-git.component.css']
})
export class TerminalBasicaGitComponent {
  title:string = "Terminal";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
