function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var acumulador = 1
  for(var i = a; i <= b; i++){
    acumulador = acumulador * i  //se guarda la iteracion en el acumulador
  }
  if(Math.min(a,b) <= 0){ //si minimo entre a y b es - menos 0 se devuelve 0
    return 0
  }
  return acumulador // devuelvo lo guardado en el acumulador
}

module.exports = productoEntreNúmeros;