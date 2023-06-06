import { Component } from '@angular/core';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-aside-temas',
  templateUrl: './aside-temas.component.html',
  styleUrls: ['./aside-temas.component.css']
})
export class AsideTemasComponent {
  visibility: boolean;
  view: string;
  links: any = [];
  constructor(private temas: TemasService) {
    this.visibility = false;
    this.view = 'hide';
  }
  ngOnInit(){
    this.temas.tema.subscribe((res)=>{
      switch(res){
        case "fundamentos":
          this.links = this.temas.temas.fundamentos;
          break;
        case "adi":
          this.links = this.temas.temas.adi;
          break;
      }
    });
  }
  hide(){
    this.visibility = false;
    this.view = 'hide';
  }
  show(){
    this.visibility = true;
    this.view = 'show';
  }
  toggle() {
    if(this.visibility){
      this.hide();
    }
    else{
      this.show();
    }
  }
}
