console.log(" -------- ");
console.log("Operaciones y metodos con Arrays ");

// Push Inserta al final
console.log(" -------- ");
console.log("Push - inserta al final ");
salad.push("🍋");
console.log("Como esta nuestra ensalada: ", salad);

// Push elimina al final
console.log(" -------- ");
console.log("Pop - elimina un elemento al final");
salad.pop();
console.log("Como esta nuestra ensalada: ", salad);
console.log("Si asignamos el valor a eliminar en una variable:");
const eliminar = salad.pop();
console.log("Valor a eliminar ", eliminar);
console.log("Como esta nuestra ensalada: ", salad);

// unshift Agrega al Inicio
console.log(" -------- ");
console.log("Unshift - agregar al inicio");
salad.unshift("🍋");
console.log("Como esta nuestra ensalada: ", salad);

//shift elimina al inicio
console.log(" -------- ");
console.log(" Shift - elimina al inicio");
salad.shift();
console.log("Como esta nuestra ensalada: ", salad);

//encontrar el indice
console.log(" -------- ");
console.log("Encontrar el indice: indexOf");
console.log("El indice del  🥦: ", salad.indexOf("🥦"));
console.log("Escenario si agrego otro elemento: 🥦");
salad.push("🥦");
console.log("Como esta nuestra ensalada: ", salad);
const position = salad.indexOf("🥦");
console.log("El indice del  🥦: ", salad.indexOf("🥦"));
console.log(
  "Asignamos la busqueda del indice en una variable llamada position: ",
  position
);
console.log(salad[position]);
console.log("Imprimimos el elemento en position : ", salad[position]);

//reversar un array
console.log(" -------- ");
console.log(" Usamos reverse para reversar un array ");
console.log("Como esta nuestra ensalada: ", salad);
salad.reverse();
console.log("Como queda luego de reversarla: ", salad);

//slice para clonar un array
console.log(" -------- ");
console.log(" Usamos el slice para duplicar o clonar un array");
console.log("Como esta nuestra ensalada: ", salad);
const saladCopy = salad.slice();
console.log("Imprimimos la copia que esta en saladCopy: ", saladCopy);

// Hacer una copia usando concat
console.log(" -------- ");
console.log("Usanmos concat para hacer una copia de un array");
const dynos = ["🦖", "🦕", "🐉"];
console.log("Tengo un array de dinosaurios ", dynos);

const copyOfDynos = [].concat(dynos);
console.log("Voy a crear una copia llamada copyOfDynos: ", copyOfDynos);

// cambiamos el valor del primer elemento en copyOfDynos
copyOfDynos[0] = "🐓";
console.log(
  "Voy a cambiar la primera posicion de mi array dynos en la posicion 0: : ",
  copyOfDynos[0]
);
// mostramos el valor de copyOfDynos y vemos que tiene el cambio
console.log("Mi array copyOfDynos queda asi: ", copyOfDynos); // -> [ '🐓', '🦕', '🐉' ]
// ahora dynos sigue teniendo el t-rex
console.log("Mi array de dinosaurios inicial dynos no cambia: ", dynos); // -> [ '🦖', '🦕', '🐉' ]

// Para ordenar un array sort
console.log(" -------- ");
console.log("Usamos sort para ordenar un array");
const nameList = ["tom", "alex", "bob"];
console.log("Dado una array de lista de nombres: ", nameList);
nameList.sort(); // returns ["alex", "bob", "tom"]
console.log("Aplicandole el sort queda asi: ", nameList);

// Para actualizar, eliminar o agregar podemos usar el splice
console.log(" -------- ");
console.log(
  "Usamos splice para añadir, eliminar y actualizar un valor de un array"
);
const nameListNew = ["tom", "alex", "bob"];
console.log("Tengo una lista de nombres: ", nameListNew);
nameListNew.splice(1, 0, "zack");
console.log(
  "Aplicandole el splice que inicie en la posicion 1, no borre y el elemento a incluir sea zack"
);
console.log("Nuestra nueva lista sera: ", nameListNew); // ["tom", "zack", "alex", "bob"]

console.log(" --- Tengo otro ejemplo con splice ---");
const nameListNew2 = ["tom", "alex", "bob"];
console.log("Tengo una lista de nombres: ", nameListNew2);
console.log(
  "Quiero eliminar un valor, iniciando en la posicion 2 y me ponga el elemento zack"
);
const deleted = nameListNew2.splice(2, 1, "zack");
console.log("El elemento que se borraria seria: ", deleted); // ["bob"]
console.log("Mi lista quedaria asi: ", nameListNew2); // ["tom", "alex", "zack"]

console.log(" --- Tengo otro ejemplo con splice ---");
console.log(
  "Si a mi lista anterior de nombres inicio en la posicion 1, borro un elemento y no le paso mas elementos nuevos"
);
console.log("Lista de nombres: ", nameListNew2);
nameListNew2.splice(1, 1);
console.log("Mi array de nombres quedaria asi: ", nameListNew2);

console.log(" --- Tengo otro ejemplo con splice ---");
console.log(
  "Si a mi lista anterior de nombres solo le paso que inicie en la posicion 1"
);
console.log("Lista de nombres: ", nameListNew2);
nameListNew2.splice(1);
console.log("Mi array de nombres quedaria asi: ", nameListNew2);

// Para Iterar en arreglos con map
console.log(" -------- ");
console.log("Usamos map para duplicar el array y recorrerlo");
const nameListMap = ["tom", "alex", "bob"];
console.log("Tenemos el siguiente array de nombres: ", nameListMap);
const newNameListMap = nameListMap.map((name) => {
  return {
    fullName: name,
  };
});
console.log(
  "Queremos hacer un map para retornar en una nueva variable un array de objetos"
);

console.log("Mi nuevo array quedaria asi: ", newNameListMap);
console.log("Mi array base quedaria asi: ", nameListMap);

// Para Iterar en arreglos con filter
console.log(" -------- ");
console.log(
  "Usamos filter para recorrer un array y de acuerdo a una condicion crear un nuevo aray con el resultado de la condicion"
);
const nameListFilter = ["tom", "alex", "bob"];
console.log("Dado un array de nombres: ", nameListFilter); // ['tom', 'bob'];
const findName = nameList.filter((name) => name !== "alex");
console.log("Quiero buscar los nombres que sean diferentes al nombre alex");
console.log("Mi nuevo array quedaria asi: ", findName); // ['tom', 'bob'];

// Para Iterar en arreglos con reduce
console.log(" -------- ");
console.log(
  "El metodo reduce recorre el array y reduce su contenido, ejecutando internamente alguna operacion dando un unico valor"
);
const arrayList = [1, 2, 3, 4];
console.log("Dado un array de numeros", arrayList);
const initialValue = 0;
console.log("Con un valor inicial de ", initialValue);
console.log("Deseo realizar una suma de todos los elementos de mi array");

const sumWithInitial = arrayList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log("El resultado de la suma es: ", sumWithInitial); // Expected output: 10
