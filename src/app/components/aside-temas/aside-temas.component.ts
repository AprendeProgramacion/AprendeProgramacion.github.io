import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-temas',
  templateUrl: './aside-temas.component.html',
  styleUrls: ['./aside-temas.component.css']
})
export class AsideTemasComponent {
  antes: boolean;
  basics: boolean;
  tech: boolean;
  antesClass: string;
  basicsClass: string;
  techClass: string;

  constructor() {
    this.antes = false;
    this.basics = false;
    this.tech = false;
    this.antesClass = 'hide';
    this.basicsClass = 'hide';
    this.techClass = 'hide';
  }
  hideAntes(){
    this.antes = false;
    this.antesClass = 'hide';
  }
  hideBasics(){
    this.basics = false;
    this.basicsClass = 'hide';
  }
  hideTech(){
    this.tech = false;
    this.techClass = 'hide';
  }
  showAntes(){
    this.antes = true;
    this.antesClass = 'show';
  }
  showBasics(){
    this.basics = true;
    this.basicsClass = 'show';
  }
  showTech(){
    this.tech = true;
    this.techClass ='show';
  }
  toggleAntes() {
    if(this.antes){
      this.hideAntes();
    }
    else{
      this.showAntes();
    }
    this.hideBasics();
    this.hideTech();
  }
  toggleBasics() {
    if(this.basics){
      this.hideBasics();
    }
    else{
      this.showBasics();
    }
    this.hideAntes();
    this.hideTech();
  }
  toggleTech() {
    if(this.tech){
      this.hideTech();
    }
    else{
      this.showTech();
    }
    this.hideAntes();
    this.hideBasics();
  }
}
