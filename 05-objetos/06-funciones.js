function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); //cantidad de argumentos que reciben las funciones

const U = Usuario;
let user = new U("Nicolas");

console.log(user);

function of(Fn, arg){
    return new Fn(arg)
}

let user1 = of(Usuario,'chanchito');
console.log(user1);

function returned () {
    return function () {
        console.log ('Hola Mundo');
    }
}

let saludo = returned();
saludo();