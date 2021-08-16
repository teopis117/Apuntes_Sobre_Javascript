// las arrows funcion son maneras de escribir funciones de manera mas limpia o darle un vistazo de mejor manera y ahora veremos como poder hacer el cambio a nuestros anteirores ejemplos

// funcion normal

const sumar = function (num1, num2) {
    console.log(num1 + num2);
}
sumar(6, 10);
// arrow function

const sumar2 = (tecnologia) => {
    console.log(`aprendiendo:${tecnologia}`);
}


sumar2("javascript");

// ------------------------------------------------------ CAMBIANDO LOS ANTERIORES EJEMPLOS DE FUNCIONES

const carrito = [
    { nombre: "tablet", precio: 120 },
    { nombre: "celular", precio: 440 },
    { nombre: "leche", precio: 10 },
    { nombre: "arroz", precio: 100 },
];


const meses = ["enero", "febrero", "marzo", "abril"];
let resultado;

// meses.forEach(function(mes)
// {
//     if(mes== 'marzo')
//     {
//         console.log("si existe")
//     }
// })

// foreach con arrow

meses.forEach(mes => {
    if (mes == 'marzo') {
        console.log("marzo si existe");
    }
});

// some 
// resultado=carrito.some(function(producto)
// {
//     return producto.nombre==='celular';
// });

resultado = carrito.some(producto =>
    producto.nombre === 'celular'
);



// reduce
// resultado= carrito.reduce(function(total,producto)
// {
//     return total=producto.precio
// },0);

resultado = carrito.reduce((total, producto) =>
    total + producto.precio
    , 0);

    
    //         filter 
    //         resultado= carrito.filter(function(producto)
    //           {
        //          return producto.precio > 400
        //          })
        
        resultado=carrito.filter(producto=> producto.precio > 100);
        console.log(resultado);