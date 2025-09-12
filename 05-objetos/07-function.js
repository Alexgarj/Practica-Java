function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () { console.log('dibujandi..');}
}

let punto = {z: 7};
//Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);
console.log(punto);
//let p = new Punto.call({}, 1, 2);
//const Point = new function('x', 'y'
//this.x = x;
//this.y = y;
//this.dibujar = function () { console.log('dibujandi..')
//');

//const p = new Point(1, 2);
//console.log(p);