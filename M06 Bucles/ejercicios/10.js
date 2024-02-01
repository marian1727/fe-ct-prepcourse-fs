function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if(num === 10 || num === 5){
    return true
  }else return false
}
console.log(1, esDiezOCinco(0))
console.log(2, esDiezOCinco(10))
console.log("3 ",esDiezOCinco(16))

module.exports = esDiezOCinco;
