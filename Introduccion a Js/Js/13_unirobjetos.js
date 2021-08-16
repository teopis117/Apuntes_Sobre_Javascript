const producto={

    nombreproducto:"monitor de 30 pulgadas",
    precio:400,
    disponible:true,
}

// una de las cosas que nos pueden ser utiles en el futuro es saber como unir dos objetos y lo hariamos de la sigueinte manera

// nuevo objeto
const medidas=
{
    peso:'1 kg',
    medidas:'1m',
}
// y con esta sintaxis podemos unir varios objetos
const nuevoProducto={...producto,...medidas};

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);