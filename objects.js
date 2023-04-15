// OBJETOS
console.log(" ---- Hello Objects !---- ");
/* Declaracion objetos */ 
console.log(" Tenemos un objeto literal pokemon");
/* Objeto literal */ 
const pokemon = {
  name: "charmander",
  skill: "Flamethrower",
};
console.log("Pokemon: ", pokemon);

//objeto constructor
console.log(" Tenemos un objeto constructor User");
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
console.log("Objeto User: ", User);
console.log("Para usar el objeto constructor User debo usar el new");
let user = new User("Jack");
console.log("creare un usuario user de mi objeto User ", user);

console.log("Imprimimos la propiedad name: ", user.name);
console.log("Imprimimos la propiedad isAdmin: ", user.isAdmin);
