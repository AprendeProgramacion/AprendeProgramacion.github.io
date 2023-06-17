import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-comandos-basicos-git',
  templateUrl: './comandos-basicos-git.component.html',
  styleUrls: ['./comandos-basicos-git.component.css']
})
export class ComandosBasicosGitComponent {
  title:string = "Comandos basicos";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
