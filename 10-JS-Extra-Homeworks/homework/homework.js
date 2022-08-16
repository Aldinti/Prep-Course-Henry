// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*var objeto({D: 1, B: 2, C: 3}) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /*  var miArreglo = [];
   for (var clave in objeto) {
     miArreglo.push([clave, objeto[clave]]);
   }
   return miArreglo; */
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  /* var array = [];
  for (var i = 0; i < string.length; i++) {
    array[i] = string[i];
  }
  array = [... new Set(array)].sort();
  var i = 0;
  array.forEach(element => {
    objeto[array[i]] = 0;
    i++;
  });
  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < string.length; k++) {
      if (array[j] == string[k]) {
        objeto[array[j]] += 1;
      }
    }
  } */
  for (let r = 0; r < string.length; r++) {
    if (!objeto.hasOwnProperty(string[r])) {
      objeto[string[r]] = 0;
    }
    objeto[string[r]] += 1;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí}
  var mayus = '';
  var minus = '';
  for (let i = 0; i < s.length; i++) {
    (s[i] === s[i].toUpperCase() ? mayus += s[i] : minus += s[i])
  }
  return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*  var fraseInv = str.split(' ').map(function (elemento) {
     var palabraInv = '';
     for (let i = elemento.length - 1; i >= 0; i--) {
       palabraInv += elemento[i];
     }
     return palabraInv;
   }).join(' '); */
  var fraseInv = str.split(" ").map(function (elemento) {
    return elemento.split("").reverse().join("");
  }).join(" ");
  return fraseInv;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  return numero.toString() === numero.toString().split("").reverse().join("") ? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // return cadena.split("a").join("").split("b").join("").split("c").join("");
  sinABC = "";
  for (let i = 0; i < cadena.length; i++) {
    if (!(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c")) {
      sinABC += cadena[i]
    }
  }
  return sinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var temp = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arr = [];
  var k = -1;
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        arr[++k] = arreglo1[i];
      }
    }
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

