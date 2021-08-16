// Destructuring en JS nos sirve para extraer y declarar una propiedad de un objeto

const producto={

    nombreproducto:"monitor de 30 pulgadas",
    precio:400,
    disponible:true,
}

// la anterior forma de hacerlo era la siguiente
// const nombreproducto=producto.nombreproducto;

// la nueva forma para hacerlo es la siguiente

const {precio}=producto;

console.log(precio);

