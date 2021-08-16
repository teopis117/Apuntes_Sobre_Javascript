//los objetos tambien pueden contener funciones :O

//this hace referencia al objeto sobre el cual estamos mandando a llamar en la funcion osea al objeto que estamos utilizando en la funcion

//las arrow function hacen referencia al scope global y no al objeto en si

//declaramos un objeto 

const reservacion=
{
    nombre:"jose",
    apellido:"diaz",
    total:2000,
    pagado:false,
    informacion:function()
    {
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }
}

reservacion.informacion();