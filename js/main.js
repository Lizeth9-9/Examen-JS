// 1. Ejercicio 1
//  Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A"

//Inicio
//Leer palabra
//Escribir - crear la palabra
//Convertir palabra en Mayuscula
//Convertir palabra con espacios
//Imprima la palabra con los parametros dados
//Fin

function textoMayus(palabra) {
    let palabraM = palabra.toUpperCase();
    return palabraM.split("").join(" ");
}
console.log(textoMayus("pedro"));
console.log(textoMayus("doraly"));

//Ejercicio 2
//Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

//Inicio
// Leer nombre
//Escribir nombre
//convertir el nombre para que sea leible
//recorrer el nombre
//imprimir la cantidad
//Fin

function cantidadPalabra(nombre) {
    let nom = nombre.split(" ").length;
    return nom;
}
console.log(cantidadPalabra("Antonio Alberto Jesús"));

//Ejercicio 3:
//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

//Inicio
//Leer frase
//Contar desde cero
//Convertir la frase a array
//Recorrer el array
//Que cuente cada indice
//Verifique si cada frase es igual a la letra que se indique
//Que sume al cero y acumule
//Imprima el resultado de la cantidad de letra que se indique
//Fin

// function contarFrase(frase, le) {
//     let acumula = 0;
//     let fra = frase.split("");
//     console.log(fra);
//     fra.forEach(function (e) {
//         if (e === le) {
//             acumula++;
//         }
//     });
//     return acumula;
// }
// console.log(contarFrase("Antonio Alberto Jesús aaaa", "o"));
