function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  var acumulador = 0 //comienza en 0 porq es una suma 

  for(var i = 1; i <= n; i++ ){
    acumulador = acumulador + i
    if(i >= 100) break; //va i ya que este es el iterador
    }
    return acumulador
  }

module.exports = sumarHastaNConBreak;