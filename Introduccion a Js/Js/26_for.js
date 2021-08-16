// una de las estructuras de control mas conocidas en el mundo de la programacion es el bucle for por que nos permite hacer o recorrer muchas cosas sin tener que hacerlas una por una

// sintaxis
// for(contador;condicion;iterador)
// {
//     condiciones
// }

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

// inicializamos con i=0 recordando que como es un arreglo comenzara desde 0
for(let i=0;i<carrito.length;i++)
{
    console.log(`${carrito[i].nombre}`);
}