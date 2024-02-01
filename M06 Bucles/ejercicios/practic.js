function esAnagrama(str1, str2) {
    // La función recibe dos argumentos "str1" y "str2" que son strings.
    // Determina si los dos strings son anagramas.
    // Devuelve true de ser así, sino retorna false.
    // IMPORTANTE: Un anagrama es una palabra que se forma
    // con las mismas letras que otra, pero en orden  diferente.
    // Tu código:
    var strinSinEspacio = str1.replace(/\s/g, " ").toLowerCase();
    var strinSinEspacio2 = str2.replace(/\s/g, " ").toLowerCase();
  
    var strOrdenada = strinSinEspacio.split(" ").sort();
    //.sort acomoda alfabeticamente las letras
    var strOrdenada2 = strinSinEspacio2.split(" ").sort();
  
    return strOrdenada.join(" ") === strOrdenada2.join(" ")

  }
  console.Console(esAnagrama("listen", "silent"))