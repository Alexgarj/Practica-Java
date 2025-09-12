let pairs = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Juan"}],
    [3, {id: 3, name: "Pepe"}],
];
let array =[{
    id : 1,
    name : 'Nicolas',
},{
    id : 2,
    name : 'Juan',
},{
    id : 3,
    name : 'Pepe',
}];

function toCollection(arr) {
    let collection = [];
    for (idx in  arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}
let resultado = toCollection(pairs);
console.log(resultado);