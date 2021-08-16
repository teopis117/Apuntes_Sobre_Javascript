//programacion orientada a objetos=POO

/*OBJECT LITERAL */
const producto=
{
    nombre:"jose",
    precio:400,
}

//object contructor es relacionado a java alguna clase que nos ayudara a crear mas objetos con propiedades similares entre si

function Producto(nombre,precio)
{
    this.nombre=nombre;
    this.precio=precio;
}

const producto2 = new Producto('Monitor de 49',800);
const producto3 = new Producto('Tablet',100);

console.log(producto2);
console.log(producto3);