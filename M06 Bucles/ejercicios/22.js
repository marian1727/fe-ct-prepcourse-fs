function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
do {
  if(mes > 0 && mes < 13 ){
    console.log("Los dias del mes ", mes, "son: ");
    return new Date(2023, mes, 0 ).getDate();
  }
  
} while (mes < 0 && mes > 13);
return ("Ingrese un dia valido")

}
console.log(diasEnMes(12))
module.exports = diasEnMes;
