function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden  diferente.
  // Tu código:
    // Eliminar espacios y convertir a minúsculas para comparar sin distinción de mayúsculas
    var str1Formateado = str1.replace(/\s/g, '').toLowerCase();
    var str2Formateado = str2.replace(/\s/g, '').toLowerCase();
  console.log(str1Formateado("Hola como va"))
  console.log(str2Formateado("Hola como va"))
    // Convertir las cadenas formateadas a arrays y ordenarlos
    var arrayStr1 = str1Formateado.split('').sort();
    var arrayStr2 = str2Formateado.split('').sort();
  
    // Comparar si los arrays son iguales
    return arrayStr1.join('') === arrayStr2.join('');



}
console.Console(esAnagrama("listen", "silent"))



// module.exports = esAnagrama;
