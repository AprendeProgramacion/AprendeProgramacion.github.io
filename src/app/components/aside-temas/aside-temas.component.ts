import { Component, HostListener } from '@angular/core';
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
  asidePos: string;
  constructor(private temas: TemasService) {
    this.visibility = false;
    this.view = 'hide';
    this.asidePos="static";
  }
  ngOnInit(){
    this.temas.tema.subscribe((res)=>{
      switch(res){
        case "adi":
          this.links = this.temas.temas.adi;
          break;
        case "fundamentos":
          this.links = this.temas.temas.fundamentos;
          break;
        case "git":
          this.links = this.temas.temas.git;
          break;
      }
    });
  }
  ngAfterViewInit(){
    this.setCurrent();
  }

  @HostListener('window:scroll')
  onScroll(){
    this.scrollAction()
  }
  scrollAction(){
    if(window.innerWidth>=1026){
      if(window.scrollY >=300){
        this.asidePos="fixed";
      }
      else{
        this.asidePos = "static";
      }
    }
  }
  setCurrent(){
    setTimeout(()=>{
      const ul = document.getElementById('list');
      let list = ul?.getElementsByTagName('li');
      if (list){
        let lista = Array.from(list)
        for(let i of lista){
          let route = i.getElementsByTagName('a')[0]?.getAttribute("href");
          if(route && route == window.location.pathname){
            i.getElementsByTagName('a')[0].style.backgroundColor = "#ccc";
            i.getElementsByTagName('a')[0].getElementsByTagName('span')[0].style.color = "#036d19";
            i.getElementsByTagName('a')[0].getElementsByTagName('span')[0].style.fontWeight = "bold";
          }
          else{
            i.getElementsByTagName('a')[0].style.backgroundColor = "#fff";
            i.getElementsByTagName('a')[0].getElementsByTagName('span')[0].style.color = "black";
            i.getElementsByTagName('a')[0].getElementsByTagName('span')[0].style.fontWeight = "normal";
          }
        }
      }
    },1);
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
