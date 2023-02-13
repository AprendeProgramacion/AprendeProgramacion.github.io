import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-retos',
  templateUrl: './aside-retos.component.html',
  styleUrls: ['./aside-retos.component.css']
})
export class AsideRetosComponent {
  basico: boolean;
  tecnicas: boolean;
  poo: boolean;
  basicoClass: string;
  tecnicasClass: string;
  pooClass: string;

  constructor() {
    this.basico = false;
    this.tecnicas = false;
    this.poo = false;
    this.basicoClass = 'hide';
    this.tecnicasClass = 'hide';
    this.pooClass = 'hide';
  }
  hideBasico(){
    this.basico = false;
    this.basicoClass = 'hide';
  }
  hideTecnicas(){
    this.tecnicas = false;
    this.tecnicasClass = 'hide';
  }
  hidePoo(){
    this.poo = false;
    this.pooClass = 'hide';
  }
  showBasico(){
    this.basico = true;
    this.basicoClass = 'show';
  }
  showTecnicas(){
    this.tecnicas = true;
    this.tecnicasClass = 'show';
  }
  showPoo(){
    this.poo = true;
    this.pooClass ='show';
  }
  toggleBasico() {
    if(this.basico){
      this.hideBasico();
    }
    else{
      this.showBasico();
    }
    this.hideTecnicas();
    this.hidePoo();
  }
  toggleTecnicas() {
    if(this.tecnicas){
      this.hideTecnicas();
    }
    else{
      this.showTecnicas();
    }
    this.hideBasico();
    this.hidePoo();
  }
  togglePoo() {
    if(this.poo){
      this.hidePoo();
    }
    else{
      this.showPoo();
    }
    this.hideBasico();
    this.hideTecnicas();
  }
}
