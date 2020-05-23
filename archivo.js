let miVariable = prompt("cuantos años tienes");
let x = parseInt(miVariable);
typeof miVariable;

//--segundo intento--//

let miVariable = prompt("cuantos años tienes");
console.log(miVariable)
let otra = parseInt(miVariable);
miVariable = otra;
typeof  miVariable;

//--Puedo pegar todos estos datos
//en la consola y los ejecuta en orden--//

//Deberes clase 29
const const1 = prompt ("Escribe tu primer nombre");
const const2 = prompt ("Escribe tu primer apellido");
var nombreCompleto = (const1 + const2);
alert ("Has sido registrada como " + nombreCompleto);

// corrijo para agregar un espacio

const const1 = prompt ("Escribe tu primer nombre");
const const2 = prompt ("Escribe tu primer apellido");
var nombreCompleto = (const1 + " " + const2);
alert ("Has sido registrada como " + nombreCompleto);


//Ejercicio uno clase 30

// === o !==
if(1 !== 2){
    console.log("Debe entrar");
}
// === o !==
if(2 !== 2) {
    console.log("NO debe entrar"); //Quiere que no se ejecute nada
}
// >, >= o <
if(1 >= 1) {
    console.log("Debe entrar");
}

if(
    1 !== 2 // >, >=, !==
    && 
    5 <= 5 // <, <=, >, >=
) {
    console.log("Debe entrar");
}

// Ejercicio 2 clase 30

/*************************************************************************************
 * Pedir dos prompts, deben ser largoPelo y barba.
 * Largo pelo pueden ser dos valores, "largo" o "corto". 
 * Barba puede ser true o false.
 * Hacer if-elseif-else para ofrecer corte de pelo si el pelo es largo, y afeitada si
 * barba es true. 
 * alert("Corte y afeitada") o alert("Corte").
 * Poner un alert en caso de que no se haga ni corte ni afeitada.
 ****************************************************************************************/

const largoPelo = prompt("Te cortas largo o corto?");
const barba = prompt("Tienes barba?");


if(largoPelo === "largo" && barba === "si"){
     alert("Te ofrecemos corte y afeitada");

} else if (largoPelo === "largo" && barba === "no"){
     alert("Te ofrecemos corte");
     

} else if (largoPelo === "corto" && barba === "si"){
     alert("Te ofrecemos afeitada");
     

} else {   
     alert("Vaya al psicologo");
}


////--Ejercicio par o impar clase 30
var miNumero = prompt("Ingresa un número cualquiera");
var parImpar = miNumero % 2; // el mod de dividirlo entre dos me da 1 si es impar y 0 si es par
if(parImpar !== 0){
    alert("Ingresaste un número impar");
}
else{
    alert("Ingresaste un número par");
}
//--


// //Crear un programa que pregunte al usuario cuántos kilos de helado
// va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. 
// Opciones:
// 1/4kg: 2 sabores.
// 1/2kg: 3 sabores.
// 3/4kg: 4 sabores.
// 1kg: 5 sabores.

var cantidad = prompt("¿Qué tamaño desea llevar? Opciones: 1/4kg | 1/2kg | 3/4kg | 1kg");
if (cantidad === "1/4kg"){
    alert("Puedes incluir hasta 2 sabores diferentes");
}
else if (cantidad === "1/2kg"){
    alert("Puedes incluir hasta 3 sabores diferentes");
}
else if (cantidad === "3/4kg"){
    alert("Puedes incluir hasta 4 sabores diferentes");
}
else{
    alert("Puedes incluir hasta 5 sabores diferentes");
}

// Clase 33 +++ ejercicios

let mes = prompt("Escribe el mes que desees (1-12)");
if(mes == 1){
    alert("Elegiste enero");
}
else if(mes == 2){
    alert("Elegiste febrero");
}
else if(mes == 3){
    alert("Elegiste marzo");
}
else if(mes == 4){
    alert("Elegiste abril");
}
else if(mes == 5){
    alert("Elegiste mayo");
}
else if(mes == 6){
    alert("Elegiste junio");
}
else if(mes == 7){
    alert("Elegiste julio");
}
else if(mes == 8){
    alert("Elegiste agosto");
}
else if(mes == 9){
    alert("Elegiste setiembre");
}
else if(mes == 10){
    alert("Elegiste octubre");
}
else if(mes == 11){
    alert("Elegiste noviembre");
}
else{
    alert("Elegiste diciembre");
}
// Ahora con switch



///genial
/// ejercicio para practicar try throw new error y catch
let dia = prompt("¿Qué día es hoy?");
try{   
    switch(dia){
        case "domingo": alert("1");
            break;
        case "lunes": alert("2");
            break;
        case "martes": alert("3");
            break;
        case "miercoles": alert("4");
            break;
        case "jueves": alert("5");
            break;
        case "viernes": alert("6");
            break;
        case "sabado": alert("7");
            break;
        default: throw new error;
    }
}catch(err){//catch va pegado a la llave que cierra el try
    alert("kedise seniora");
}
alert("acá sigue la cosa");


// Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION,
//  y luego de elegida, ingresar dos números y hacer dicha operación con ella.

let operacion;
let primerNumero;
let segundoNumero;
let resultado;

operacion = prompt("¿Qué operación deseas efectuar:\n suma\n resta \n multiplicación \n división?");
primerNumero = parseInt(prompt("Ingresa el primer número"));
segundoNumero = parseInt(prompt("Ingresa el segundo número"));

switch(operacion){
    case "suma": 
        resultado = primerNumero + segundoNumero;
        alert("La " + operacion + " de los valores ingresados es " + resultado);
        break;
}
// Ej 3 calse 34

let numero = 0;
let suma = 0;

while (numero < 1000) {
    suma = suma + numero
    numero++;
    console.log(suma);
}

// ej 2
let numero = 0;

while (numero < 1000) {
    console.log(numero);
    numero += 2;
}

// ej 1
let numero = 100;

while (numero > 0) {
    console.log(numero);
    numero--;
}

//////Ej 4 clase 34
// 04
/**
 * Mostrar en consola la suma parcial de todos los 
 * números impares que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */
let numero = 0;
let suma = 0;


while (numero < 1000) {
    if (numero % 2 != 0){ 
        suma = suma + numero;
    }
    numero++;  
}
console.log(suma);

//// Ej 5

let i = 1; 
let dibujo = "*";

 while (i <= 13) {
    console.log(dibujo);
    dibujo = dibujo + "*"; 
    i++;
 }

//--Clase 34

// Hacer un programa que pida al usuario un numero del 1 al 9.
// Luego imprimir la tabla de multiplicar de ese numero. Utilizar while.

let numeroElegido = prompt("ingrese un número del 1 al 9");
let i = 1;
numeroElegido = Number(numeroElegido);



// Definir un nombre de usuario y una contraseña.　Pedir al usuario que ingrese ambos campos por prompt,
// y repetir mientras el usuario NO escriba correctamente. 
//Utilizar operadores lógicos && u || en la condición si es necesario.


// Sumar al ejercicio anterior la opción de que al tercer intento, el programa se cierra. Utilizar operadores lógicos && u || en la condición si es necesario.

//


//Doble ejercitacion de la clase pasada -- Ejercicio 2

//-- 3
let numero = 0;
 for (let i= 0; i<= 1000; i++){
     numero = numero + i;
 } 
 console.log(numero);

//--4
let numero = 0;
 for (let i =0; i<=1000; i++){
    if ( i % 2 != 0) {
        numero=numero + i;
    }
 }
 console.log(numero);

//--5
let asterisco = "";
 for (let i=1; i<=13; i++){
     asterisco = asterisco +"*";
 }
 console.log(asterisco);

//--6
for (let i=0; i<=10000; i++){
    if(i % 10 == 0){
        console.log(i);
    }
}

/// otra solucion 

for(let i=0; i<=10000; i+=10){
    console.log(i);
}
//--7



 for(let i=1000; i>=0; i--){
     let numero;
     if(i % 10 == 0){
        numero = "**" + i + "**"
        console.log(numero);
    }else{
        numero = i;
        console.log(numero);
    }
 }

 //---oo
 for(let i=1000; i>=0; i--){
    if(i % 10 == 0){
       console.log("**" + i + "**");
   }else{
       console.log(i);
   }
}

//Clase 36 ---- Ejercicio Arrays Split
let nombres = prompt("ingrese los nombres");
const miArray = nombres.split(' '); 
console.log(miArray);
for (let i = 0; i <=2; i++){
    alert("hola "+ miArray[i]+ "!");
}
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor
 *  número ingresado. Ejemplo:
 * 
 * Ingrese números: 5 7 99 34 54 2 12
 * El menor número es: 2
 */
let numeros = prompt("ingrese los 5 numeros"); // 57 5 78 34 77
const miArray = numeros.split(' '); // .split lo convierte en un array con el parámetro separador que le paso en 
//ahora tenemos que ver como recorrerlo y compararlo

let menor = miArray[0]; 

for(let i = 0; i < miArray.length; i++){
    if(miArray[i]< menor){
        menor = miArray[i];
    }
}
alert("el menor número ingresado fue " + menor);
console.log(miArray);

//03
/**
  * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. 
  * Ejemplo:
  * Ingrese números: 5 7 10 12 24
  * La suma de todos los números es: 58
  */

let numeros = prompt("ingrese los 5 numeros"); 
const miArray = numeros.split(' ');
// solución pedorra manual
let suma = Number(miArray[0]) + Number(miArray[1]) + Number(miArray[2]) + Number(miArray[3]) + Number(miArray[4]);
alert(suma);

// Solución postalina
let suma = 0; 
let numeros = prompt("ingrese los 5 numeros"); 
const miArray = numeros.split(' ');
for(let i=0; i < miArray.length; i++){
    suma += Number(miArray[i]);
}
alert(suma);

 // 04
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar 
 * si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. 
 * Ejemplo:
 * Ingrese valores: 5 7 99 34 54 2 12
 * Ingrese valor a buscar: 54
 * El valor 54 se encuentra entre los valores originales
 */
let numeros = prompt("ingrese los 5 numeros"); 
const miArray = numeros.split(' ');
let consulta = prompt("¿Qué valor desea saber si existe?");

if(miArray.indexOf(consulta) !== -1){
    alert("El número " + consulta + " se encuentra donde usté lo busca");
}
else{
    alert("El número buscado no está acá");
}

// 05
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar
 * el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, 
 * o indicar si no se ha encontrado. Ejemplo:
 * Ingrese valores: 5 7 12 34 54 2 12
 * Ingrese valor a buscar: 12---------------- A VER FEDEEEEEE esto
 * El valor 12 se encuentra en el índice 2
 */
let numeros = prompt("Ingrese los valores que se le cante");
const miArray = numeros.split(' ');
let consulta = prompt("¿Qué valor desea chequear?");
if(miArray.indexOf(consulta) === -1){
    alert("Su valor no está acá");
}
else{
    alert ("Su valor se encuentra en el indice " + miArray.indexOf(consulta));
}

// 06
 /**
  * Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres
  * separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. 
  * Ejemplo:
  * Ingresar nombres: Sam Frodo Legolas
  * Sam y Frodo están juntos, ¡Frodo está a salvo!
  * Ingresar nombres: Sam Orco Frodo
  * Sam y Frodo están separados, ¡Frodo está en peligro!
  */
 let nombres = prompt("Ingrese todos los participantes");
 const miArray = nombres.split(' ');
 let positionSam = miArray.indexOf("Sam");
 let positionFrodo = miArray.indexOf("Frodo");
 if(positionFrodo == (positionSam + 1) || positionFrodo == (positionSam - 1)){
     alert("Frodo y Sam están juntos");
 }
 else{
     alert("Sam y Frodo están separados");
}
// 07
/**
 * Crear un programa que pida ingresar "manzana", "pera"y "durazno" y devuelva un mensaje 
 * con la cantidad que hay de cada una. Ejemplo:
 * Ingrese frutas: manzana manzana pera durazno pera durazno manzana
 * Hay 3 🍎, 2 🍐 y 2 🍑
 */
let pera = 0;
let manzana = 0;
let durazno = 0;
let frutas = prompt("Ingrese todas las frutas que tiene");
const miArray = frutas.split(' ');
for(let i=0; i < miArray.length; i++){
    if(miArray[i] == "pera"){
        pera = pera + 1;
    }
    else if (miArray[i] == "manzana"){
        manzana = manzana + 1;
    }
    else {
        durazno += 1;

    }
}
alert(" Hay " + durazno + "duraznos " + pera + "peras " + manzana + "manzanas");

//Para toda esta clase revisar hacer i con array.length