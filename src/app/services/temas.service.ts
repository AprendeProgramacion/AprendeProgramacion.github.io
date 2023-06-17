import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  tema:EventEmitter<String>;
  temas =
  {
    "adi":[
      {
        "nombre": "Historia",
        "link": "/aprende/antes-de-iniciar/historia"
      },
      {
        "nombre": "Enfoques",
        "link": "/aprende/antes-de-iniciar/enfoques"
      },
    ],
    "fundamentos":[
      {
        "nombre": "¿Que es la programacion?",
        "link": "/aprende/fundamentos/que-es-programacion"
      },
      {
        "nombre": "Tipos de lenguajes",
        "link": "/aprende/fundamentos/tipos-de-lenguajes"
      },
      {
        "nombre": "Editores de codigo - IDE",
        "link": "/aprende/fundamentos/editores-ides"
      },
      {
        "nombre": "Salida estandar",
        "link": "/aprende/fundamentos/output"
      },
      {
        "nombre": "variables",
        "link": "/aprende/fundamentos/variables"
      },
      {
        "nombre": "entrada estandar",
        "link": "/aprende/fundamentos/input"
      },
      {
        "nombre": "operadores aritmeticos",
        "link": "/aprende/fundamentos/operadores-aritmeticos"
      },
      {
        "nombre": "operadores logicos",
        "link": "/aprende/fundamentos/operadores-logicos"
      },
      {
        "nombre": "condicionales",
        "link": "/aprende/fundamentos/condicionales"
      },
      {
        "nombre": "Arreglos y matrices",
        "link": "/aprende/fundamentos/arreglos-y-matrices"
      },
      {
        "nombre": "ciclos while",
        "link": "/aprende/fundamentos/ciclos-while"
      },
      {
        "nombre": "ciclos for",
        "link": "/aprende/fundamentos/ciclos-for"
      },
      {
        "nombre": "funciones y procedimientos",
        "link": "/aprende/fundamentos/funciones-y-procedimientos"
      },
      {
        "nombre": "librerias",
        "link": "/aprende/fundamentos/librerias"
      }
    ],
    "git":[
      {
        "nombre": "¿Que es GIT?",
        "link": "/aprende/git/que-es-git"
      },
      {
        "nombre": "Estados en GIT",
        "link": "/aprende/git/estados"
      },
      {
        "nombre": "Instalacion y Configuracion",
        "link": "/aprende/git/instalacion"
      },
      {
        "nombre": "Terminal",
        "link": "/aprende/git/terminal"
      },
      {
        "nombre": "Crear Repositorio",
        "link": "/aprende/git/crear-repositorio"
      },
      {
        "nombre": "Comandos Basicos",
        "link": "/aprende/git/comandos-basicos"
      },
      {
        "nombre": "Viajes en el Tiempo",
        "link": "/aprende/git/viaje-en-el-tiempo"
      },
      {
        "nombre": "Diferencia entre Versiones",
        "link": "/aprende/git/diferencia-entre-versiones"
      },
      {
        "nombre": "Ramas",
        "link": "/aprende/git/ramas"
      },
      {
        "nombre": "SSH GitHub",
        "link": "/aprende/git/ssh-github"
      },
    ],
  }
  constructor() {
    this.tema = new EventEmitter();
  }
}
