//objetos  lo mas utilizados en javascript

const nombreproducto1="monitos de 20 pulgadas";
const precio1=300;
const disponible1=true;
// TIPO_DATO Nombre={
//     PROPIEDAD:VALOR,
//     PROPIEDAD2:VALOR2,
//     ETC
// }

const producto={

    nombreproducto:"monitor de 30 pulgadas",
    precio:400,
    disponible:true,
}

// para acceder a  las propiedades de un objeto accedemos agregando un . al nombre del objetos ejemplo

console.log(producto.disponible);

// otra forma de acceder  a la propiedad del objeto sera esta

console.log(producto["nombreproducto"]);