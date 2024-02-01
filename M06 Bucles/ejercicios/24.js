function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // return texto.split(""). reverse().join("");
  //el split convierte un texto en un array
  //reverse devuelve el array inverso
  //el join une el arreglo y queda como texto nuevamente
  //tambien se puede hacer con variables
  var separarTexto = texto.split("");
  var invertirTexto= separarTexto.reverse();
  var textoInvertido = invertirTexto.join(""); 
  //se crea una nueva variable que es = a la anterior variable para que el join la afecte
  //luego se retorna la nueva variable que tiene guardada el cambio de las anteriores variables
  return textoInvertido;

}
console.log(invertirTexto(("hola")))
module.exports = invertirTexto;