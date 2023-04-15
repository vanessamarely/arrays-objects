console.log(" -------- ");
console.log("Operaciones y metodos con Objetos ");

// Para acceder a las propiedades del objeto
console.log("Nuestro objeto es ", pokemon); //charmander
console.log("El valor en la propiedad name es: ", pokemon.name); //charmander
console.log("El valor en la propiedad skill es: ", pokemon["skill"]); //Flamethrower

//Modificar un valor en una propiedad
console.log(" -------- ");
console.log("Nuestro objeto es ", pokemon);
pokemon.name = "Pikachu";
console.log("modificando el valor de la propiedad name: ", pokemon.name);
pokemon.skill = "Lightning Rod";
console.log("modificando el valor de la propiedad skill: ", pokemon.skill);
pokemon.specie = "Mouse Pokémon";
console.log("modificando el valor de la propiedad specie: ", pokemon.specie);
pokemon["type"] = "Electric";
console.log("incluyendo la propiedad type: ", pokemon.type);
console.log("Nuestro objeto queda: ", pokemon);

//Eliminar una propiedad
console.log(" -------- ");
console.log("Eliminar propiedades de un objeto");
const blog = { name: "Wisdom Geek", author: "Saransh Kataria" };
console.log("Nuestro objeto es ", blog);
const propToBeDeleted = "author";
delete blog[propToBeDeleted];
console.log("Si queremos en nuestro objeto eliminar author"); // {name: 'Wisdom Geek'}
console.log("usamos el delete ");
console.log("Nuestro objeto queda asi: ", blog);

//Iterar en un objeto
console.log(" -------- ");
console.log("Si queremos iterar o recorrer un objeto");
const persona = {
  nombre: "Ade",
  pronombre: "el",
  edad: 60,
};
console.log("Tenemos un objeto persona ", persona);
console.log("usamos el for ... in para recorrer nuestro array");
for (let propiedad in persona) {
  console.log(
    `La propiedad es: ${propiedad} y el valor: ${persona[propiedad]}`
  );
}

// Desestructurando
console.log(" -------- ");
console.log("Para desestructurar un objeto, o extraer las propiedades");
const objetito = {
  nombre: "Adele",
  edad: 32,
  trabajo: "cantante",
  saludar: function () {
    console.log(`Hola soy ${objetito.nombre} y soy ${objetito.trabajo}`);
  },
};
console.log(
  "Dado un objeto objetito: ",
  objetito,
  " si quiero imprimir sus propiedades"
);
console.log("objetito.nombre ", objetito.nombre);
console.log(objetito.edad);
console.log("objetito.edad ", objetito.edad);
console.log(objetito.trabajo);
console.log("objetito.trabajo ", objetito.trabajo);
console.log(objetito.saludar);
console.log("objetito.saludar ", objetito.saludar);

const { nombre, edad, trabajar, saludar } = objetito;
console.log("Al hacerle destructuring o desestruturando sus propiedades");
console.log("nombre: ", nombre, " edad: ", edad); // 'Adele' 32
console.log("Como desestructure saludar puedo llamar a la funcion saludar: ");
saludar(); // 'Hola soy Adele y soy cantante'
