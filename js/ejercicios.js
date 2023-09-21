/*Ej1 Solicitar al usuario un numero mediante un prompt, empezando desde 1 e ir incrementado el valor de a 1 . 
A medida que recorremos todos los numeros enteros anterior e incluido el ingresado por el usuario hacer un log de aquellos numeros que son multiplo de 7.*/

//Ej1
// const numero_ingresado=parseInt(prompt("Ingrese un numero"))
// let contador=1

// while(contador<=numero_ingresado){

//     if(contador%7===0){
//     console.log(`${contador} es multiplo de 7`);
//     }else{
//         console.log("este numero no es multiple de 7")
//     }

//     contador++;
//     console.log(contador)
// }

 /*Ej2
    - Solicitar a una maestra que ingresa las calificaciones de sus alumnos
    - Pedir constantemente las notas hasta que la maestra ingrese un 0 como valor En ese momento saldremos de nuestro bucle e imprimiremos el promedio del curso según las notas ingresadas/     
    !Tener en cuenta que cuando presione 0 no afecte al promedio de notas.
    NO ESTA BIEN: ( 10 + 10 + 10 + 0 ) /  4 = 7,5
    #ESTA BIEN: ( 10 + 10 + 10) /  3 = 10
*/
//Este programa utiliza un bucle while que solicita notas hasta que se ingresa un 0. Luego, calcula el promedio del curso y lo muestra en pantalla. Asegúrate de ingresar notas válidas en el rango de 0 a 10 para obtener resultados precisos.
let notas=[]
let total=0
contador=0 //Cantidad de veces que ingreso una nota

while(true){
let nota=parseInt(prompt("Ingrese calificaciones del alumno"))
    if (nota === 0) {
        break;
        }
        
    if(nota<0 || nota>10 || isNaN(nota)){ //si NOTA ES menor que o y NOTA ES mayor que 10 o NOTA es un numero invalido
        alert("La nota debe estar en el rango de 0 a 10 y ser un número válido.");
        continue;
        }
    notas.push(nota) //Agregamos la nota a la lista y actualizamos el total de notas y el contador.
    total+=nota
    contador++
}//salimos del bucle
if (contador>0){ //si el contador es mayo que 0
    const promedio = total/contador; //hacemos el promedio de las notas ingregadas en el array NOTAS
    console.log(`el promedio del alumno es ${promedio.toFixed(2)}`)//toFixed, 2 digitos despues de la ,
}



// Inicializar variables
// let notas = [];
// let total = 0;
// let contador = 0;

// // Solicitar las notas hasta que se ingrese un 0
// while (true) {
//   const nota = parseFloat(prompt("Ingrese la nota del alumno (0 para salir):"));

//   if (nota === 0) {
//     break;
//   }

//   // Validar que la nota esté en el rango válido (0-10)
//   if (nota < 0 || nota > 10 || isNaN(nota)) {
//     alert("La nota debe estar en el rango de 0 a 10 y ser un número válido.");
//     continue;
//   }

//   // Agregar la nota a la lista y actualizar el total y el contador
//   notas.push(nota);
//   total += nota;
//   contador++;
// }

// // Calcular el promedio del curso
// if (contador > 0) {
//   const promedio = total / contador;
//   console.log(`El promedio del curso es: ${promedio.toFixed(2)}`);
// } else {
//   console.log("No se ingresaron notas válidas.");
// }