// existen metodos en js que nos permiten hacer un monton de cosas en general y en este caso veremos dos Frezee y seal

const producto={

    nombreproducto:"monitor de 30 pulgadas",
    precio:400,
    disponible:true,
}

// con Freeze  haremos que no podamos modificar,agregar o eliminar cualquier propiedad en nuestros objetos
Object.freeze(producto);

producto.precio=300;

// y para saber si un objeto esta  bloquead podemos hacer lo siguiente
// si retorna true=esta sellado
console.log(Object.isFrozen(producto));

// Seal  nos permitira modificar propiedades mas no eliminar o agregar

Object.seal(producto);
producto.precio="nuevo precio";
