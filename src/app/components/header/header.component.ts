import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  windowWidth:any;
  windowScroll:any;
  constructor(){
  }
  ngOnInit(){
    this.windowWidth = window.innerWidth;
    this.windowScroll = window.scrollY;

  }
  @HostListener('window:scroll')
  onScroll(){
    this.scrollAction()
  }

  @HostListener('window:resize')
  onResize(){
    this.windowWidth = window.innerWidth;
  }

  scrollAction(){
    let header = document.getElementById('header');
    let navbar = document.getElementById('menu');
    if (window.scrollY <=299 && this.windowWidth>700 && header != null && navbar != null) {
      navbar.style.boxShadow="none";
      header.style.boxShadow="none";
    }
    else if (window.scrollY <=199 && this.windowWidth<=700 && header != null && navbar != null) {
      navbar.style.boxShadow="none";
      header.style.boxShadow="none";
    }
    else if(header != null && navbar != null){
      if(this.windowWidth <= 1003){
        navbar.style.boxShadow="0 2px 10px #555";
      }
      header.style.boxShadow="0 2px 10px #555";
    }
    let center= document.getElementById('center')
    if(this.windowWidth<=1003){
      if (window.scrollY>this.windowScroll&&navbar != null){
        navbar.style.boxShadow="none";
        navbar.classList.add("hide-header")
        navbar.classList.remove("show-header")
        center?.classList.remove("width-70")
      }
      else if (window.scrollY<this.windowScroll&&navbar != null){
        navbar.classList.add("show-header")
        navbar.classList.remove("hide-header")
        center?.classList.add("width-70")
      }
      this.windowScroll=window.scrollY;
    }
  }
}
