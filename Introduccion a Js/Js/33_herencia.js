class Producto
{
    constructor(nombre,precio)
    {
        this.precio=precio;
        this.nombre=nombre;
    }

    formatearProducto()
    {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
    //agregar  un nuevo metoodo que retorne el precio de un producto
}


const Producto2= new Producto('monitor curvo',4000);
const Producto3= new Producto('Tablet',500);

console.log(Producto2);
console.log(Producto3);

//HERENCIA

// en programacion se recomienda repetir codigo lo menos posible

class Libro extends Producto()
{
    constructor(nombre,precio,isbn)
    {
      super(nombre,precio);
      this.isbn;  
    }
    formatearProducto()
    {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}



const Libro = new Libro('javascript',400,'12312312');
