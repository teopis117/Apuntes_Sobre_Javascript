const carrito=[
    {nombre:"tablet",precio:120},
    {nombre:"celular",precio:440},
    {nombre:"leche",precio:10},
    {nombre:"arroz",precio:100},
];


const meses=["enero","febrero","marzo","abril"];


// foreach con este metoodo recorrera cada elemento de nuestro arreglo

meses.forEach(function(mes)
{
    if(mes== 'marzo')
    {
        console.log("si existe")
    }
})


// con includes hacemos lo mismo pero de manera mas resumida un poco mejor vista  y mas pequeña , nos regresara un true si encontro dicho valor o false si no

const resultado = meses.includes('diciembre');
console.log(resultado);

// some hace lo mismo pero es ideal para realizar busquedas en objetos ya que en cuanto al includes no lo hace

resultado=carrito.some(function(producto)
{
    return producto.nombre==='celular';
});

// reduce nos servira para poder sumar todos los elementos que querramos y regresara dicho valor 

resultado= carrito.reduce(function(total,producto)
{
    return total=producto.precio
},0);

// con filter es uno de los metodos mas utilizados y mas beneficiosos ya que como su nombre nos dice filtrara elementos  y nos los regresara para poder ver los que pasaron la prueba

// nos regresara todos los elementos cuyo valor sea mayor a 400
resultado= carrito.filter(function(producto)
{
    return producto.precio > 400
})