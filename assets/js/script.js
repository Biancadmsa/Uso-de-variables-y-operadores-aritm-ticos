// Actividad 2----------------------
let num1 =  prompt("Ingresa un numero");
let num2 =  prompt("ingresa un segundo numero");

let suma = parseInt(num1) + parseInt(num2);
let resta = parseInt(num1) - parseInt(num2);
let multiplicacion =parseInt(num1) * parseInt(num2);
let division = parseInt(num1) / parseInt(num2);


document.write("El resultado de sumar "+ num1 +" + "+ num2 +" es "+ suma +". ");
document.write("El resultado de restar "+ num1 +" - "+ num2 +" es "+ resta +". ");
document.write("El resultado de multiplicar "+ num1 +" * " + num2 + " es "+ multiplicacion +". ");
document.write("El resultado de dividir " + num1 + " / " + num2 +" es " + division + ". ");



// Actividad 3-----------------------
let gradosCelsius = prompt("Ingrese la temperatura en grados Celsius en numero");
let gradosKelvin = (gradosCelsius + 273.15);
let gradosFahrenheit = (gradosCelsius * 9/5) + 32;

document.write("La temperatura ingresada en grados Celsius es "+ gradosCelsius +" °C. " + "<br>" );

document.write("La temperatura ingresada en  grados Kelvin es "+ gradosKelvin + " K . " + "<br>");
document.write("La temperatura ingresada en grados Fahrenheites "+ gradosFahrenheit+" °F ." + "<br>" );


// Actividad 4-------------------------------------
let dias = prompt("Ingrese una cantidad de días");
let diasEnAnios = Math.floor(dias / 365); 
let semanas = Math.floor(dias / 7); 

document.write("La cantidad de días ingresados en años es " + diasEnAnios + "<br>");
document.write("La cantidad de días ingresados en semanas es " + semanas + "<br>");

// Actividad 5-------------------------------------------
let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
let numero3 = parseInt(prompt("Ingrese un tercer numero"));
let numero4 = parseInt(prompt("Ingrese un cuarto numero"));
let numero5 = parseInt(prompt("Ingrese un quinto numero"));

let sumaTotal = numero1 +  numero2 + numero3 + numero4 + numero5;
let promedio = sumaTotal / 5 ;
document.write("La suma total de los numeros es: "+sumaTotal+"<hr>")
document.write("El promedio de los numeros es: "+promedio+"</hr>")
