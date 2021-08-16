//clases  el nombre de las clases por lo general inician en mayusculas y no inicina con parentesis sino con llaves

//los parametros que le pasaremos a nuestra clase van por medio de un contructor

//contructor(){} es una funcion y palabra reservada

class Producto
{
    constructor(nombre,precio)
    {
        this.precio=precio;
        this.nombre=nombre;
    }

    formatearProducto()
    {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
    //agregar  un nuevo metoodo que retorne el precio de un producto
}


const Producto2= new Producto('monitor curvo',4000);
const Producto3= new Producto('Tablet',500);

console.log(Producto2);
console.log(Producto3);