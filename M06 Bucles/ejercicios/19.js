function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var acumulador = 0 //comienza en 0 ya que es una suma, para asi no modificar el num dado
  for(var i = 1; i <= n; i++ ){
    acumulador = acumulador + i
  }
  return acumulador
}

module.exports = sumarHastaN;
