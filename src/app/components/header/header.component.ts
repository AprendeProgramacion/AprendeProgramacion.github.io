import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(){
  }
  ngOnInit(){
    let header = document.getElementById('header');
    $(window).scroll(() => {
      if (<number>$(window).scrollTop() <=299 && <number>$(window).width()>700 && header != null) {
        header.style.boxShadow="none";
      }
      else if (<number>$(window).scrollTop() <=199 && <number>$(window).width()<=700 && header != null) {
        header.style.boxShadow="none";
      }
      else if(header != null){
        header.style.boxShadow="0 2px 20px #888";
      }
    })
    let logo = document.getElementById('menu');
    let scroll = <number>$(window).scrollTop();
    let center= document.getElementById('center')
    $(window).scroll(() => {
      if(<number>$(window).width()<=1003)
      if (<number>$(window).scrollTop()>scroll&&logo != null){
        logo.classList.add("hide-header")
        logo.classList.remove("show-header")
        center?.classList.remove("width-70")
      }
      else if (<number>$(window).scrollTop()<scroll&&logo != null){
        logo.classList.add("show-header")
        logo.classList.remove("hide-header")
        center?.classList.add("width-70")
      }
      scroll=<number>$(window).scrollTop();
    });
  }
}
