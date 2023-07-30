import { Component } from '@angular/core';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-inicio-git',
  templateUrl: './inicio-git.component.html',
  styleUrls: ['./inicio-git.component.css']
})
export class InicioGitComponent {
  constructor(private temas: TemasService){
    setTimeout(()=>{
      this.temas.tema.emit("git");
    }, 1);
  }
}
