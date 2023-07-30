import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-ramas-git',
  templateUrl: './ramas-git.component.html',
  styleUrls: ['./ramas-git.component.css']
})
export class RamasGitComponent {
  title:string = "Ramas";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
