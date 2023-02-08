import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-temas',
  templateUrl: './aside-temas.component.html',
  styleUrls: ['./aside-temas.component.css']
})
export class AsideTemasComponent {
  basics: boolean;
  tech: boolean;
  basicsClass: string;
  techClass: string;

  constructor() {
    this.basics = false;
    this.tech = false;
    this.basicsClass = 'hide';
    this.techClass = 'hide';
  }
  hideBasics(){
    this.basics = false;
    this.basicsClass = 'hide';
  }
  hideTech(){
    this.tech = false;
    this.techClass = 'hide';
  }
  showBasics(){
    this.basics = true;
    this.basicsClass = 'show';
  }
  showTech(){
    this.tech = true;
    this.techClass ='show';
  }
  toggleBasics() {
    if(this.basics){
      this.hideBasics();
    }
    else{
      this.showBasics();
    }
    this.hideTech();
  }
  toggleTech() {
    if(this.tech){
      this.hideTech();
    }
    else{
      this.showTech();
    }
    this.hideBasics();
  }
}
