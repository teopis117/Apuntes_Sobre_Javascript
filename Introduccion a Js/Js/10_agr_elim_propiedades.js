//objetos  lo mas utilizados en javascript

const producto={

    nombreproducto:"monitor de 30 pulgadas",
    precio:400,
    disponible:true,
}

console.log(producto);

// sabemos que agregar y eliminar propiedades son importantes para un objeto asi que veremos como agregar o eliminar

// Agregar propiedades

producto.imagen="imagen.jpg";

// Eliminar propiedades

delete producto.disponible;

console.log(producto);