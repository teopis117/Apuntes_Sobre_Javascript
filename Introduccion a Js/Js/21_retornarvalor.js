// en este archivos veremos como podemos retornar algun valor para nuestras funciones

// con esta funcion retornaremos la suma de dos numeros
function sumar(numero1,numero2)
{
    return numero1+numero2;
}
// en este caso ejecutamos la funcion dentro del console log para mostrar el resultado
console.log("mostrando el valor desde consola: "+sumar(2,3));


// pero tambien es muy comun encontrar esta manera que podamos guardar el valor dentro de una variables para despues mostrarla
const resultado=sumar(2,3);

console.log("mostrando el valor desde la variable:" +resultado);

// ahora veremos como podemos hacer algo mas complicado tipo un carrito de compras

// donde almacenaremos el valor de las compras
let total=0;

function agregarcarrito(precio)
{
    // return total= total+precio esto es lo mismo que lo de abajo
    return total+=precio;
}

total=agregarcarrito(300);
total=agregarcarrito(40);
total=agregarcarrito(60);

console.log(total);

function calcularimpuestos(total)
{
    return 1.15*total;
}

const totalapagar=calcularimpuestos(total);

console.log("Este es el total a pagar despues de impuestos:$"+parseInt(totalapagar));