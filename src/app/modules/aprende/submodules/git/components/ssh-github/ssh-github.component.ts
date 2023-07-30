import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-ssh-github',
  templateUrl: './ssh-github.component.html',
  styleUrls: ['./ssh-github.component.css']
})
export class SshGithubComponent {
  title:string = "Conexion ssh Github";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
