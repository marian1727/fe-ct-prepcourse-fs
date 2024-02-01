// // var suma = 0 //asignar valor a variable
// // //establecemos variable i(iterador); segundo la condicion de cumplimiento ;
// // //luego como queremos que se ejecute en cada ciclo de iteracion
// // for(var i = 0 ; i < 10 ; i++){
// //     suma = suma + 1
// //     console.log(suma)
// // }

// //bucle while

// var i = 0 //la variable se declara por fuera

// while (i <= 200) { //condicion para que pare el bucle
//   if( i === 22){
//     console.log("Pasaste por el 22")
//   }
//   console.log(i)

//   i++ //como va a incrementar va al final de todo
// }
// let decenas = 0
// let unidades = 0
// bucleDecenas: while(true){
//   console.log(decenas)
//   if (decenas === 2){
//     break bucleDecenas;
//   }bucleUnidades: while(true){
//     unidades ++
//     if(unidades === 0){
//       unidades = 0
//       console.log(unidades)
//       break bucleUnidades;
//     }
//   }
//   decenas ++
// }

// function sonAnagramas(str1, str2) {
//   // Eliminar espacios y convertir a minúsculas para comparar sin distinción de mayúsculas
//   var str1Formateado = str1.replace(/\s/g, '').toLowerCase();
//   var str2Formateado = str2.replace(/\s/g, '').toLowerCase();

//   // Convertir las cadenas formateadas a arrays y ordenarlos
//   var arrayStr1 = str1Formateado.split('').sort();
//   var arrayStr2 = str2Formateado.split('').sort();

//   // Comparar si los arrays son iguales
//   return arrayStr1.join('') === arrayStr2.join('');
// }

// // Ejemplos de uso
// console.log(sonAnagramas("listen", "silent")); // Devuelve true
// console.log(sonAnagramas("hello", "world"));   // Devuelve false
// console.log(sonAnagramas("The eyes", "They see")); // Devuelve true


var userInput = prompt("Ingresa un número:");
var valorNumerico = parseInt(userInput);

console.log("Entrada del usuario como número:", valorNumerico);