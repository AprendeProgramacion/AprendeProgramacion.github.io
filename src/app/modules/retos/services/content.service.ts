import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  basico: any = {
    "l1":{
      "suma":{
        "title": "Sumar numeros",
        "description": "Escribe un programa que le pida al usuario que ingrese dos números, los sume y muestre el resultado.",
        "solutionImg": "assets/img/retos_basico_suma.png",
        "solutionAlt": "solucion suma",
        "solutionDesc1": "",
        "solutionDesc2": ""
      },
      "residuo":{
        "title": "Calcular residuo",
        "description": "Escribir un programa que calcule el residuo de la division de dos numeros.",
        "solutionImg": "assets/img/retos_basico_residuo.png",
        "solutionAlt": "solucion residuo",
        "solutionDesc1": "",
        "solutionDesc2": "En la solucion fue necesario evaluar mediante un condicional si el numero2 era diferente de 0 para evitar un error de compilacion"
      },
      "cuadrado":{
        "title": "Calcular cuadrado",
        "description": "Escribir un programa que calcule el cuadrado de un numero ingresado por el usuario.",
        "solutionImg": "assets/img/retos_basico_cuadrado.png",
        "solutionAlt": "solucion cuadrado",
        "solutionDesc1": "",
        "solutionDesc2": ""
      },
      "areaCuadrado":{
        "title": "Calcular area de un cuadrado",
        "description": "Escribir un programa que calcule el area y el perimetro de un cuadrado cuyo lado es ingresado por el usuario.",
        "solutionImg": "assets/img/retos_basico_perimetro-area-cuadrado.png",
        "solutionAlt": "solucion area cuadrado",
        "solutionDesc1": "",
        "solutionDesc2": ""
      },
      "areaCilindro":{
        "title": "Calcular area de un cilindro",
        "description": "Escribir un programa que calcule el area de un cilindro cuyo radio y altura son ingresados por el usuario.",
        "solutionImg": "assets/img/retos_basico_area-cilindro.png",
        "solutionAlt": "solucion area cilindro",
        "solutionDesc1": "",
        "solutionDesc2": "En este problema tambien es posible crear una constante que almacene el numero pi y posteriormente utilizarlo dentro de la operación."
      },
      "hipotenusa":{
        "title": "Calcular hipotenusa",
        "description": "Escribir un programa que calcule la hipotenusa de un triangulo rectangulo cuyos catetos son ingresados por el usuario.",
        "solutionImg": "assets/img/retos_basico_area-cilindro.png",
        "solutionAlt": "solucion area cilindro",
        "solutionDesc1": `En esta solucion, lo mas optimo es importar una libreria que contiene multiples funciones matematicas, las cuales nos sirven para facilitar el trabajo evitando tener que realizar cierta cantidad de operaciones una a una, como lo son la raiz cuadrada y la potencia en este caso.<br>
        Si quieres saber mas sobre librerias, visita el apartado de <a class="keyword" [routerLink]="['/aprende/fundamentos/librerias']">librerias</a> en nuestra pagina web`,
        "solutionDesc2": "En este problema tambien es posible crear una constante que almacene el numero pi y posteriormente utilizarlo dentro de la operación."
      },
    },
    "l2":{
      "definitiva":{
        "title": "Calcular definitiva",
        "description": "Escribir un programa que calcule la nota definitiva de un alumno que ingresa sus tres notas (entre 0 y 5). El criterio para aprobar es que la nota definitiva sea mayor o igual a 3, si es menor que tres el alumno reprobó. Mostrar por pantalla si el alumno aprobo o reprobó la materia.",
        "solutionImg": "assets/img/retos_basico_def.png",
        "solutionAlt": "solucion nota definitiva",
        "solutionDesc1": "",
        "solutionDesc2": ""
      },
      "evalDia":{
        "title": "Evaluar el dia de la semana",
        "description": `Solicitar un numero al usuario entre 1 y 7, y calcular el dia de la semana correspondiente a este numero. <br>
        <strong>NOTA: </strong> Es obligatorio el uso de la estructura switch-case para este ejercicio.`,
        "solutionImg": "assets/img/retos_basico_dia.png",
        "solutionAlt": "solucion evaluar dia",
        "solutionDesc1": "",
        "solutionDesc2": "En la solucion fue necesario evaluar mediante un condicional si el numero2 era diferente de 0 para evitar un error de compilacion"
      },
    }
  };
  constructor() { }
}
