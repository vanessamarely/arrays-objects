// Arrays
console.log(" ---- Hello Arrays !---- ");
/* Declaracion arrays */ // //

const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const arrayVacio = [];
const arrayNumeros = [1, 2, 3];
const arrayTiposDatos = ["tomato", 1, false, [], {}, console.log("hello!")];

// tamaño array
console.log(" -------- ");
console.log("Tamaño Array");
console.log("Tamaño Array salad: " + salad.length);
console.log("Tamaño Array arrayVacio: " + arrayVacio.length);
console.log("Tamaño Array arrayNumeros: " + arrayNumeros.length);
console.log("Tamaño Array arrayTiposDatos: " + arrayTiposDatos.length);

/*  ejemplo identificar el tipo de dato
    usando el typeof
*/
console.log(" -------- ");
const cadena = "1111";
console.log("Declaracion de constante llamada cadena: " + cadena);
console.log("Tipo de dato salad: " + typeof salad);
console.log("Tipo de dato de cadena: " + typeof cadena);

// imprimir el valor que tiene el array en una posicion dada
console.log(" -------- ");
console.log("Imprimamos la ensalada: " + salad);
console.log("Salad[6]: " + salad[6]);
console.log("Salad[salad.length - 1]: " + salad[salad.length - 1]);

// Reemplazar un valor en una posicion
console.log(" -------- ");
console.log("Imprimamos la ensalada: " + salad);
salad[1] = "⌚";
console.log("Cambiando el valor en salad[1] " + salad);
salad[3] = "🦍";
console.log("Cambiando el valor en salad[3] " + salad);

salad[salad.length] = "ejemplo";
console.log("Cambiando el valor en salad[salad.length] x ejemplo " + salad);

salad[salad.length] = false;
console.log("Cambiando el valor en salad[salad.length] x false " + salad);

// ejemplo dado una posicion cualquiera// // console.log(salad)
console.log(" -------- ");
const saladEjemplo = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
saladEjemplo[135] = "";
console.log(
  "Imprimir saladEjemplo[135] asignandole un string vacio ",
  saladEjemplo[135]
);
saladEjemplo[68] = 23123;
console.log("Imprimir saladEjemplo[68] asignandole 23123 ", saladEjemplo[68]);
console.log("Imprimiendo como va la saladEjemplo" + saladEjemplo);
console.log(
  "imprimir la mitad de saladEjemplo " + saladEjemplo[saladEjemplo.length / 2]
);

// recorrer un array iniciando en 0
console.log(" -------- ");
console.log("Recorrer mi array salad iniciando en la posicion 0");
for (let i = 0; i <= salad.length; i++) {
  console.log("El array en la posicion: " + i + " tiene el valor: ", salad[i]);
}

// recorrer un array iniciando por el ultimo valor
console.log(" -------- ");
console.log(
  "Recorrer mi array salad iniciando en la posicion salad.length - 1"
);
for (let i = salad.length - 1; i >= 0; i--) {
  console.log("El array en la posicion: " + i + " tiene el valor: ", salad[i]);
}
