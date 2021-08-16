const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

//foreach y map son exclusivos para arreglos 

carrito.forEach(function(producto)
{
console.log(producto);
});

// despues de ver como funciona este codigo entendamos varias cosas la primera es que el parametro que le damos en este caso producto sera el objeto que se encuentre en dicha iteracion o recorrido y que como estaremos escogiendo ese objeto en la iteracion dada no es a fuerzas que abramos [] ya que es un metodo para arreglos que nos arreglara la vida

// tambien es importante decir que no es a fuerzas utilizar el producto por que tambien podemos hacer lo siguiente
let j=0;
carrito.forEach(function(producto)
{
    j++;
console.log("estamos en un objeto "+j);
});

// como arrow function
/*

carrito.foreach((producto) => 
{
    j++;
console.log("estamos en un objeto "+j);
});

*/

// Map

const arreglo1=carrito.forEach(producto => producto.nombre);
const arreglo2=carrito.map(producto => producto.nombre);
console.log(arreglo1);
console.log(arreglo2);

// la sugerencia que nos da es que cuando querramos mostrar en pantalla X elemento del arreglo o imprirlo  utilizemos for each pero cuando querramos copiar el elemento o mandar a un arreglo esa informacion utilicemos el map