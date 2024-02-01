function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  
  var strinSinEspacio = string.replace(/\s/g, "").toLowerCase();
  //toLowerCase convierte en minuscula 
  //replase(/\s hace una busqueda de los espacios en blango y la g significa una busqueda global)
  //asi se eliminan los espacios en planco y , para unir todo
  var cadenaInvertida = strinSinEspacio.split(""). reverse(). join("")
  if(strinSinEspacio === cadenaInvertida){ 
    return true
  }else return false
  
}
console.log(esPalindromo("La ruta nos aporto otro paso natural"))

module.exports = esPalindromo;
