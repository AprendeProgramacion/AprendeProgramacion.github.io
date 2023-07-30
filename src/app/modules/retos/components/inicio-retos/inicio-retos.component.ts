import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-inicio-retos',
  templateUrl: './inicio-retos.component.html',
  styleUrls: ['./inicio-retos.component.css']
})
export class InicioRetosComponent {
  title:string = "Retos";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
